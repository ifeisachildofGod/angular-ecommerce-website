import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
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
  optionsVisibility = false;

  constructor() { }

  editNumberVal(num: string, numberValue?: string, fractionValue?: string, zeroValue?: string){
    numberValue = numberValue != null ? numberValue : ''
    fractionValue = fractionValue != null ? fractionValue : ''
    zeroValue = zeroValue != null ? zeroValue : numberValue + '0'

    let finalText = num[0]
    let numberDecimalSplit = num.split('.')

    if (num != '0') {
      if (numberDecimalSplit[0].length > 3) {
          const numOfTrailingDigits = numberDecimalSplit[0].slice(1, -1) + numberDecimalSplit[0][numberDecimalSplit[0].length - 1];
          
          let mapping = ['K', 'M', 'B', 'T', 'Q', 'S'];

          for (let index = 0; index < numOfTrailingDigits.length % 3; index++){
            finalText += numOfTrailingDigits[index];
            console.log(this.price + ' ' + numOfTrailingDigits + ' ' + '%d', index)
          }
          
          finalText += (numberDecimalSplit[0][1] != '0' ? '.' + numberDecimalSplit[0][1] : '');
          finalText += mapping[((numOfTrailingDigits.length - (numOfTrailingDigits.length % 3)) / 3) - 1]
          finalText = numberValue + finalText;
          
        }
      else {
          if (numberDecimalSplit[1] != undefined){
            if (numberDecimalSplit[0] == '0'){
              if (numberDecimalSplit[1].length == 1) finalText = numberDecimalSplit[1] + '0' + fractionValue;
              else if (numberDecimalSplit[1].length == 2) finalText = numberDecimalSplit[1] + fractionValue;
              else finalText = numberDecimalSplit[1].slice(0, 2) + fractionValue;
            } else {finalText = numberValue + num + fractionValue; console.log(numberDecimalSplit[1])}
          } else finalText = numberValue + num;
        }
    }
    else finalText = zeroValue;
    return finalText
  
  }

  onOptionsClick(){
    this.optionsVisibility = !this.optionsVisibility
  }

}
