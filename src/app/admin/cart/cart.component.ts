import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  imports: [CommonModule],

})
export class CartComponent {
  items = [
    { name: 'Produit 1', description: 'Description du produit 1', price: 10, quantity: 1 },
    { name: 'Produit 2', description: 'Description du produit 2', price: 20, quantity: 2 }
  ];

  removeFromCart(item: any) {
    this.items = this.items.filter(i => i !== item);
  }

  changeQuantity(item: any, change: number) {
    const index = this.items.findIndex(i => i === item);
    if (index !== -1) {
      this.items[index].quantity += change;
      if (this.items[index].quantity < 1) {
        this.items[index].quantity = 1; // pour éviter les quantités négatives
      }
    }
  }
}
