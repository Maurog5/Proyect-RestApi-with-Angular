import { Injectable } from '@angular/core';
import { IPais } from '../../../app/models/pais.model';
import { v4 as uuidv4 } from 'uuid'; // Importa uuidv4

@Injectable({
  providedIn: 'root'
})
export class CountryServiceComponent {
  private countries: IPais[] = [];
  
  constructor() { }

  addCountry(country: IPais): void {
    country.id = uuidv4(); // Asignar un ID único al país
    this.countries.push(country);
  }

  updateCountry(updatedCountry: IPais): void {
    const index = this.countries.findIndex(country => country.id === updatedCountry.id);
    if (index !== -1) {
      this.countries[index] = updatedCountry;
    }
  }

  getCountryById(id: string): IPais | null {
    return this.countries.find(country => country.id === id) || null;
  }
}
