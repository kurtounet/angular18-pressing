import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CartService} from '../../services/cart.service';
import { MatButtonModule, } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-quantity-selector',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule],
  templateUrl: './quantity-selector.component.html',
  styleUrl: './quantity-selector.component.css'
})
export class QuantitySelectorComponent {

   @Input() inQuantity: number = 0;
   @Output() changeQuantity  = new EventEmitter(); 
  //@Output() numberChange: EventEmitter<number> = new EventEmitter();
  changeQuantity(quantity: number) {
    this.changeQuantity.emit(quantity);
  }
  

 
  constructor(private cartService: CartService) { }
  decreaseQuantity(quantity: number) {
    //const quantity = parseInt(this.item.quantity, 10);
    if (quantity > 1) {
       quantity--;
    }else{
      quantity = 1;
    }   
    this.changeQuantity(quantity);
  }
  increaseQuantity(quantity: number) {
    quantity++;
    //const quantity = parseInt(this.item.quantity, 10);
    //this.item.quantity = (quantity + 1).toString();
    this.changeQuantity(quantity);
  }
  
}
