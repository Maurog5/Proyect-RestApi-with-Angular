import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../components/service/paises.service';
import { IPais } from '../../app/models/pais.model'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchText1: string = '';
  searchText2: string = '';
  searchResults: IPais[] = [];

  constructor(private paisesService: PaisesService) {}

  ngOnInit() {}

  onSearch() {
    this.paisesService.getPaises().subscribe((data: IPais[]) => {
      // Encuentra los países que coincidan con los textos de búsqueda
      this.searchResults = data.filter(pais =>
        pais.name.common.toLowerCase().includes(this.searchText1.toLowerCase()) 
        
      );
    });
  }
  removeSearchResult(result: IPais) {
    const index = this.searchResults.indexOf(result);
    if (index !== -1) {
      this.searchResults.splice(index, 1);
    }
  }
}
