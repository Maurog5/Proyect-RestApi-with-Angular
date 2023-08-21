import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../service/favorites-service/favorites-service.component'; // Importa el servicio FavoritesService
import { IPais } from '../../app/models/pais.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoritos: IPais[] = [];

  constructor(private favoritesService: FavoritesService,
    private router: Router) {}

    goToHome() {
      this.router.navigate(['/home']); 
    }

  ngOnInit(): void {
    this.favoritos = this.favoritesService.getFavorites();
  }

  removeFromFavorites(pais: IPais): void {
    this.favoritesService.removeFromFavorites(pais);
    this.favoritos = this.favoritesService.getFavorites(); 
  }
  editCountry(country: IPais): void {
    this.router.navigate(['/create', country.id]); // Cambia '/edit' por la ruta correcta para tu formulario de edición
  }
}