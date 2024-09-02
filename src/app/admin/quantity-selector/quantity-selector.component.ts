import {Component, EventEmitter, inject, Input, Output, SimpleChange, SimpleChanges} from '@angular/core';

import {FormsModule, NgModel} from '@angular/forms';
import {ShoppingCartService} from '../../services/shopping-cart.service';

@Component({
  selector: 'app-quantity-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quantity-selector.component.html',
  styleUrl: './quantity-selector.component.css'
})
export class QuantitySelectorComponent {

  serviceShoppingCart$ = inject(ShoppingCartService).getCart();

  // @Input() inQuantity!: number;
  // @Output() outQuantity = new EventEmitter();
  // // @Output() numberChange: EventEmitter<number> = new EventEmitter();

  // quantity!: number;

  // ngOnInit(): void {
  //   this.quantity = this.inQuantity;
  // }

  // changeQuantity(event: any) {
  //   this.quantity = parseInt(event.target.value, 10);
  //   this.outQuantity.emit(this.quantity);
  // }

  // decrementQuantity() {
  //   if (this.quantity > 0) {
  //     this.quantity--;
  //     this.outQuantity.emit(this.quantity);
  //   }
  //   // this.changeQuantity(this.inQuantity);
  // }
  // incrementQuantity() {
  //   this.quantity++;
  //   this.outQuantity.emit(this.quantity);
  // }

  @Input() inQuantity!: number;
  @Output() outQuantity = new EventEmitter<number>();

  quantity!: number

  ngOnInit() {
    this.quantity = this.inQuantity;
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['inQuantity']) {
      this.quantity = changes['inQuantity'].currentValue;
    
  }
}
  decrease() {
    if (this.quantity > 0) {
      this.quantity--;
      this.outQuantity.emit(this.quantity);
    }
  }

  increase() {
    this.quantity++;
    this.outQuantity.emit(this.quantity);
  }

  onInputChange(value: any) {
    this.quantity = parseInt(value, 10);
    this.outQuantity.emit(this.quantity);
  }

}
