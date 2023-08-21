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

  onImageChange(event: any): void {
    const file: File = event.target.files[0];
    this.selectedImage = file;
  }

  createCountry(): void {
    const newCountry: IPais = this.countryForm.value;

    if (this.selectedImage) {
      const imageUrl = URL.createObjectURL(this.selectedImage);
      newCountry.flags = {
        png: imageUrl,
        svg: '',
        alt: ''  
      };
    }
  
    this.countryService.addCountry(newCountry);
    this.favoritesService.addToFavorites(newCountry);
  
    this.countryForm.reset();
    this.selectedImage = null;
    alert('País creado exitosamente');
    this.router.navigate(['/favorites']);
  }
}
