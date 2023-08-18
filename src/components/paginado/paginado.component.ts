import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginado',
  templateUrl: './paginado.component.html',
  styleUrls: ['./paginado.component.css']
})
export class PaginadoComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number[] = [];
  
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
}