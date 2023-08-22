import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPais } from '../../../app/models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritos: IPais[] = [];

  constructor() {
    const favoritosData = localStorage.getItem('favoritos');
    if (favoritosData) {
      this.favoritos = JSON.parse(favoritosData);
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
  }
  toggleFavorite(pais: IPais): void {
    const index = this.favoritos.findIndex(f => f.name.common === pais.name.common);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
    } else {
      this.favoritos.push(pais);
    }
    this.saveToLocalStorage();
  }

  addToFavorites(pais: IPais): void {
    this.favoritos.push(pais);
    this.saveToLocalStorage();
  }

  removeFromFavorites(pais: IPais): void {
    const index = this.favoritos.findIndex(f => f.name?.common === pais.name?.common);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  getFavorites(): IPais[] {
    return this.favoritos;
  }

  updateFavorites(favoritos: IPais[]): void {
    this.favoritos = favoritos;
    this.saveToLocalStorage();
  }
  
}