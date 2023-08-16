import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../service/favorites-service/favorites-service.component'; // Importa el servicio FavoritesService
import { IPais } from '../../app/models/pais.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoritos: IPais[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    // Suscríbete a los cambios en la lista de favoritos
    this.favoritesService.getFavorites().subscribe(favoritos => {
      this.favoritos = favoritos;
    });
  }

  removeFromFavorites(pais: IPais): void {
    this.favoritesService.removeFromFavorites(pais); // Llama al método del servicio para eliminar de favoritos
  }
}
