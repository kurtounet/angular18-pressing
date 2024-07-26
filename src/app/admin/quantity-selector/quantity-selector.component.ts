import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CartService} from '../../services/cart.service';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-quantity-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quantity-selector.component.html',
  styleUrl: './quantity-selector.component.css'
})
export class QuantitySelectorComponent {

  private cartService = inject(CartService);

   @Input() inQuantity!: number;
   @Output() quantity  = new EventEmitter(); 
 // @Output() numberChange: EventEmitter<number> = new EventEmitter();
  
  
  ngOnInit():void{
    this.inQuantity = this.inQuantity; 
  }
  changeQuantity(qty: number) {
    this.changeQuantity
    this.quantity.emit(qty);
  }
  
  decrementQuantity() {   
    if (this.inQuantity > 1) {
       this.inQuantity--;
    }else{
      this.inQuantity = 1;
    }   
    this.changeQuantity(this.inQuantity);
  }
  incrementQuantity() {    
    this.inQuantity++;       
    this.changeQuantity(this.inQuantity);
  }
 
}
