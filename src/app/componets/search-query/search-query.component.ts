import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-query',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-query.component.html',
  styleUrl: './search-query.component.css'
})
export class SearchQueryComponent {
  searching = false;

  querySearch(value: string){
    this.searching = true;
    if (value.length == 0) this.searching = false;
    console.log(value)
  }
}
