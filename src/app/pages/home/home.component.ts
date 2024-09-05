import { Component } from '@angular/core';
import { ProductListViewComponent } from '../../componets/product-list-view/product-list-view.component'
import { SearchQueryComponent } from '../../componets/search-query/search-query.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListViewComponent, SearchQueryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
