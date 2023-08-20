import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryServiceComponent } from '../service/country-service/country-service.component';
import { FavoritesService } from '../service/favorites-service/favorites-service.component'; // Importa el servicio FavoritesService
import { IPais } from '../../app/models/pais.model';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent {
  countryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private countryService: CountryServiceComponent,
    private favoritesService: FavoritesService, // Agrega el servicio FavoritesService
    private router: Router
  ) {
    this.countryForm = this.fb.group({
      name: ['', Validators.required],
      capital: [''],
      region: ['']
    });
  }

  createCountry(): void {
    const newCountry: IPais = this.countryForm.value;
    this.countryService.addCountry(newCountry); // Agrega el país al servicio CountryServiceComponent

    // Agrega el país al servicio FavoritesService
    this.favoritesService.addToFavorites(newCountry);

    this.countryForm.reset();
  
    // Mostrar un alert cuando el país se crea correctamente
    alert('País creado exitosamente');
  
    this.router.navigate(['/favorites']);
  }
}
