import { Component, Input } from '@angular/core';
import { IPais } from '../../app/models/pais.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {
  @Input() paises: IPais[] = [];

  getGoogleMapsLink(googleMapsUrl: string): string {
    return `https://www.google.com/maps/place/${encodeURIComponent(googleMapsUrl)}`;
  }

  openGoogleMaps(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
  toggleFavorite(pais: IPais) {
    pais.favorite = !pais.favorite;
  }
}
