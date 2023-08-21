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
  updateCountry(updatedCountry: IPais): void {
    const index = this.countries.findIndex(country => country.id === updatedCountry.id);
    if (index !== -1) {
      this.countries[index] = updatedCountry;
    }
  }
  // Agrega métodos adicionales según sea necesario, por ejemplo para obtener los países favoritos, etc.
}
