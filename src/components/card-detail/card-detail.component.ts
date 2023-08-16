import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {
  @Input() paises: any[] = []; // Lista de países proporcionada desde el componente padre
  itemsPerPage: number = 6;
  currentPage: number = 1;

  toggleFavorite(pais: any) {
    pais.favorite = !pais.favorite;
  }

  openGoogleMaps(mapUrl: string) {
    // Implementa la lógica para abrir Google Maps con la URL proporcionada
  }

  getPaginatedPaises(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.paises.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  totalPages(): number[] {
    const itemsPerPage = 6; // Número de elementos por página
    const total = Math.ceil(this.paises.length / itemsPerPage);
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