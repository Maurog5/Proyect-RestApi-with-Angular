import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../components/service/paises.service';
import { FavoritesService } from '../../components/service/favorites-service/favorites-service.component'; 
import { IPais } from '../../app/models/pais.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchText1: string = '';
  searchText2: string = '';
  searchResults: IPais[] = [];

  constructor(private paisesService: PaisesService, private favoritesService: FavoritesService) {} // Inyecto ambos servicios

  ngOnInit() {}

  onSearch() {
    this.paisesService.getPaises().subscribe((data: IPais[]) => { 
      this.searchResults = data.filter(pais =>
        pais.name.common.toLowerCase().includes(this.searchText1.toLowerCase()) 
      );

      if (this.searchResults.length === 0) {
        window.alert('No country with that name found.');
      }
    });
  }

  removeSearchResult(result: IPais) {
    const index = this.searchResults.indexOf(result);
    if (index !== -1) {
      this.searchResults.splice(index, 1);
    }
  }

  toggleFavorite(pais: IPais) {
    pais.favorite = !pais.favorite;

    if (pais.favorite) {
      this.favoritesService.addToFavorites(pais);
    } else {
      this.favoritesService.removeFromFavorites(pais);
    }
  }

 //COMENTO ESTO   
 // if (pais.favorite) {
   //   window.alert(`¡${pais.name.common} se ha añadido a tus favoritos!`);
   // } else {
   //   window.alert(`¡${pais.name.common} ya no está en tus favoritos!`);
    //}
  }

