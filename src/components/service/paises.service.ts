import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPais } from 'src/app/models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  favorites: any;
  constructor(private http: HttpClient) {}

  getPaises() {
    return this.http.get("https://restcountries.com/v3.1/all").pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  searchPaisesByName(name: string) {
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`).pipe(
      map((res: any) => {
        return res;
      })
    );
    
  }
  updateFavorite(updatedCountry: IPais): void {
    const index = this.favorites.findIndex((country: { id: string; }) => country.id === updatedCountry.id);
    if (index !== -1) {
      this.favorites[index] = updatedCountry;
    }
  }
}