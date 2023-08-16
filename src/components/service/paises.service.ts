import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
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
}