import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryServiceComponent } from '../service/country-service/country-service.component';
import { FavoritesService } from '../service/favorites-service/favorites-service.component';
import { IPais } from '../../app/models/pais.model';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent {
  countryForm: FormGroup;
  selectedImage: File | null = null;
  editingCountry: IPais | null = null; // Variable para almacenar el país que se está editando

  constructor(
    private fb: FormBuilder,
    private countryService: CountryServiceComponent,
    private favoritesService: FavoritesService,
    private router: Router
  ) {
    this.countryForm = this.fb.group({
      name: ['', Validators.required],
      capital: [''],
      population: ['']
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  // Prellenar el formulario con datos del país a editar
  preFillForm(country: IPais) {
    this.editingCountry = country; // Guarda el país en edición
    this.countryForm.patchValue({
      name: country.name.common,
      capital: country.capital,
      population: country.population
    });
  }

  // Cancelar la edición
  cancelEdit(): void {
    this.editingCountry = null;
    this.countryForm.reset();
  }

  // Actualizar el país en edición
  updateCountry(): void {
    if (!this.editingCountry) {
      return;
    }

    // Actualiza los campos del país con los valores del formulario
    this.editingCountry.name.common = this.countryForm.value.name;
    this.editingCountry.capital = this.countryForm.value.capital;
    this.editingCountry.population = this.countryForm.value.population;

    // Actualiza el país en el servicio
    this.countryService.updateCountry(this.editingCountry);

    this.editingCountry = null;
    this.countryForm.reset();
    alert('Country updated successfully');
    this.router.navigate(['/favorites']);
  }



  
  selectedImageURL: string | null = null;
  
  onImageChange(event: any): void {
    const file: File = event.target.files[0];
    this.selectedImage = file;
  
    if (this.selectedImage) {
      this.selectedImageURL = URL.createObjectURL(this.selectedImage);
    } else {
      this.selectedImageURL = null;
    }
  }

  createCountry(): void {
    const newName = this.countryForm.value.name;
    const newCountry: IPais = {
      favorite: false,
      name: {
        common: newName,
        official: '',
        nativeName: {}
      },
      flags: {
        png: '',
        svg: '',
        alt: ''
      },
      capital: this.countryForm.value.capital,
      population: this.countryForm.value.population,
      area: 0,
      region: '',
      maps: {
        googleMaps: '',
        openStreetMaps: ''
      },
      currencies: {},
      id: ''
    };

    if (this.selectedImage) {
      const imageUrl = URL.createObjectURL(this.selectedImage);
      newCountry.flags.png = imageUrl;
    }

    this.countryService.addCountry(newCountry);
    this.favoritesService.addToFavorites(newCountry);

    this.countryForm.reset();
    this.selectedImage = null;
    alert('Country created successfully');
    this.router.navigate(['/favorites']);
  }
  
}