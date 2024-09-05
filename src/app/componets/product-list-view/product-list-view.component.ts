import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../../componets/product-card/product-card.component';
import { Product } from '../../../../Product';
import { PRODUCTS } from '../../../../mock-products';

@Component({
  selector: 'app-product-list-view',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-list-view.component.html',
  styleUrl: './product-list-view.component.css'
})
export class ProductListViewComponent {
  products: Product[] = PRODUCTS;
}
