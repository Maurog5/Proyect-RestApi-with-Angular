import { Component, Input } from '@angular/core';
import { FavoritesService } from '../service/favorites-service/favorites-service.component';
import { IPais } from '../../app/models/pais.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {
  @Input() paises: IPais[] = [];
  itemsPerPage: number = 6;
  currentPage: number = 1;

  constructor(private favoritesService: FavoritesService, private sanitizer: DomSanitizer) {}

  toggleFavorite(pais: IPais) {
    pais.favorite = !pais.favorite;

    if (pais.favorite) {
      this.favoritesService.addToFavorites(pais);
    } else {
      this.favoritesService.removeFromFavorites(pais);
    }
  }

  openGoogleMaps(mapUrl: string | undefined) {
    if (mapUrl) {
      window.open(mapUrl, '_blank');
    } else {
      console.error('URL de mapa no definida para el país seleccionado.');
    }
  }

  getPaginatedPaises(): IPais[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.paises.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  totalPages(): number[] {
    const total = Math.ceil(this.paises.length / this.itemsPerPage);
    const maxPagesToShow = 10;
  
    if (total <= maxPagesToShow) {
      return Array.from({ length: total }, (_, i) => i + 1);
    } else {
      const startPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(total, startPage + maxPagesToShow - 1);
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }
  }
}
