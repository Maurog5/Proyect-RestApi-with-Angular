import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../service/paises.service';
import { IPais } from '../../app/models/pais.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PaisesService]
})
export class HomeComponent  {
  title: string;
  paises: IPais[] = [];
  isAboutRoute: boolean = false;
  searchText1: string = '';

  constructor(private paisesService: PaisesService) {
    this.title = "Hola estoy en Angular ";
    this.paisesService.getPaises().subscribe(
      (paises) => {
        this.paises = paises.map((pais: any) => ({
          name: pais.name,
          flags: pais.flags,
          population: pais.population,
          capital: pais.capital,
          area: pais.area,
          region: pais.region,
          maps: pais.maps,
          currencies: pais.currencies,
        }));
      },
      (error) => {
        console.error("Error al obtener los países:", error);
      }
    );
  }

}
