import { Injectable } from '@angular/core';
import { IPais } from '../../../app/models/pais.model'; // Importa el modelo de país

@Injectable({
  providedIn: 'root'
})
export class CountryServiceComponent {
  private countries: IPais[] = []; //para almacernar los paises 
  constructor() { }

  addCountry(country: IPais): void {
    this.countries.push(country); 
  }

  
}
