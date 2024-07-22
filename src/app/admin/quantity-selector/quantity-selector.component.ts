import { Component, inject, Input } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
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

  // @Input() item!: CartItem;
  item = { name: 'Product Name', quantity: '1' };
  constructor(private cartService: CartService) { }
  decreaseQuantity() {
    const quantity = parseInt(this.item.quantity, 10);
    if (quantity > 1) {
      this.item.quantity = (quantity - 1).toString();
    }
  }
  increaseQuantity() {
    const quantity = parseInt(this.item.quantity, 10);
    this.item.quantity = (quantity + 1).toString();
  }
  updateQuantity(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;

    if (!value || isNaN(parseInt(value, 10)) || parseInt(value, 10) < 1) {
      value = '1';
    }

    this.item.quantity = value;
    inputElement.value = this.item.quantity;
  }
}
