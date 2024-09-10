import { Component, EventEmitter, inject, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';

import { FormsModule, NgModel } from '@angular/forms';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-quantity-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quantity-selector.component.html',
  styleUrl: './quantity-selector.component.css'
})
export class QuantitySelectorComponent {

  serviceShoppingCart$ = inject(ShoppingCartService).getCart();

  @Input() inQuantity!: number;
  @Output() outQuantity = new EventEmitter<number>();

  // Méthode pour augmenter la quantité
  increase() {
    this.inQuantity++;
    this.outQuantity.emit(this.inQuantity);
  }

  // Méthode pour diminuer la quantité
  decrease() {
    if (this.inQuantity > 1) {
      this.inQuantity--;
      this.outQuantity.emit(this.inQuantity);
    }
  }

  // Méthode pour capter les changements manuels dans l'input
  onInputChange(event: any) {
    this.inQuantity = event.target.value;
    this.outQuantity.emit(this.inQuantity);
  }
  /*
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
  */
}
