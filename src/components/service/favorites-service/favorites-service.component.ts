import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPais } from '../../../app/models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritos: IPais[] = [];
  private favoritosSubject = new BehaviorSubject<IPais[]>(this.favoritos);

  constructor() {}

  toggleFavorite(pais: IPais): void {
    const index = this.favoritos.findIndex(f => f.name.common === pais.name.common);
    const favoritosData = localStorage.getItem('favoritos');

    if (index !== -1) {
      this.removeFromFavorites(pais);
    } else {
      this.addToFavorites(pais);
    }
  }

  addToFavorites(pais: IPais): void {
    this.favoritos.push(pais);
    this.favoritosSubject.next([...this.favoritos]);
  }

  removeFromFavorites(pais: IPais): void {
    const index = this.favoritos.findIndex(f => f.name.common === pais.name.common);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      this.favoritosSubject.next([...this.favoritos]);
    }
  }

  getFavorites(): BehaviorSubject<IPais[]> {
    return this.favoritosSubject;
  }
}
