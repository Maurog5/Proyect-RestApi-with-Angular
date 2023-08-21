import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { FavoritesService } from '../service/favorites-service/favorites-service.component'; // Importa el servicio FavoritesService
import { IPais } from '../../app/models/pais.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],

})
export class FavoritesComponent implements OnInit {
  favoritos: IPais[] = [];

  constructor(private favoritesService: FavoritesService,
    private router: Router,
    private cdr: ChangeDetectorRef) {}

    goToHome() {
      this.router.navigate(['/home']); 
    }

    ngOnInit(): void {
      this.favoritos = this.favoritesService.getFavorites();
    }
    
    removeFromFavorites(pais: IPais): void {
      this.favoritesService.removeFromFavorites(pais);
    
      // Obtén la lista actualizada de favoritos desde el servicio
      const updatedFavorites = this.favoritesService.getFavorites();
    
      // Actualiza la lista de favoritos en el servicio
      this.favoritesService.updateFavorites(updatedFavorites);
    
      // Actualiza la referencia en el componente
      this.favoritos = updatedFavorites;
    
      this.cdr.detectChanges(); // Forzar la detección de cambios
    }

  

  editCountry(country: IPais): void {
    this.router.navigate(['/edit', country.id]);
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }
  
  
  
  
 
}