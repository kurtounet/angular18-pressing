import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { itemCart } from '../../models/itemCart.model';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  imports: [CommonModule, QuantitySelectorComponent],

})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  cart: itemCart[] = [];
  total: number = 0;


  // items = [
  //   { name: 'Produit 1', description: 'Description du produit 1', price: 10, quantity: 1 },
  //   { name: 'Produit 2', description: 'Description du produit 2', price: 20, quantity: 2 }
  // ];
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    //console.log(this.cart);
  }
  removeItemCart(id: number) {
    this.cartService.removeItem(id);
    console.log(this.cartService.cart);
  }
  clearCart(): void {
    this.cart = this.cartService.clearCart();
  }
  validedOrder(): void {
    if (this.cart.length > 0) {
      this.cartService.validedOder();
      this.cart = [];
    }
  }
  changeQuantity(event: any) {
    let qty = event.target.value;
    // const { item, quantity, change } = event;
    // const index = this.cart.findIndex(i => i === item);
    // if (index !== -1) {

    // }
    console.log(qty)
    /*
    const index = this.items.findIndex(i => i === item);
    if (index !== -1) {
      this.items[index].quantity += change;
      if (this.items[index].quantity < 1) {
        this.items[index].quantity = 1; // pour éviter les quantités négatives
      }
    }*/
  }

  validCommande() {
    console.log('commande');
  }





}
