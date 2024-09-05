import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() backgroundcolor: string = "#000000";

  @Input() category: string = "Placeholder";
  @Input() name: string = "Placeholder";
  @Input() brand: string = "Placeholder";
  @Input() price: string = "0";
  @Input() sales: string = "0";
  
  options = document.querySelector(".options");

  constructor() { }


}
