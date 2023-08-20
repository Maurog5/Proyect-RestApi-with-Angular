import { Injectable } from '@angular/core';
import { IPais } from '../../../app/models/pais.model'; // Importa el modelo de país

@Injectable({
  providedIn: 'root'
})
export class CountryServiceComponent {
  private countries: IPais[] = []; // Aquí almacenaremos los países

  constructor() { }

  addCountry(country: IPais): void {
    this.countries.push(country); // Agregar el país a la lista
  }

  // Agrega métodos adicionales según sea necesario, por ejemplo para obtener los países favoritos, etc.
}
