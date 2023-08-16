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

  addToFavorites(pais: IPais): void {
    if (!this.favoritos.includes(pais)) {
      this.favoritos.push(pais);
      this.favoritosSubject.next([...this.favoritos]);
    }
  }

  removeFromFavorites(pais: IPais): void {
    const index = this.favoritos.indexOf(pais);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      this.favoritosSubject.next([...this.favoritos]);
    }
  }

  getFavorites(): BehaviorSubject<IPais[]> {
    return this.favoritosSubject;
  }
}