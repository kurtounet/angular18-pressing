import { Injectable } from '@angular/core';
 
import { itemCart } from '../models/itemCart.model';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  CART_KEY = 'shopping_cart';

  constructor() { }

 cart: itemCart[]=[
  {   "itemCartId": 1,   "categoryId": 0,   "serviceId": 0,   "quantity": 2,   "price": 5}, 
  {    "itemCartId": 2,    "categoryId": 0,    "serviceId": 0,    "quantity": 5,    "price": 8   }
 ];

  //cart: Item[] = [];
  itemCartCurrent: itemCart = { itemCartId: 0, categoryId: 0, serviceId: 0, quantity: 0, price: 0 };
  ngOInit() {
    
  }
  getCart(): itemCart[] {
    //const cart = localStorage.getItem(this.CART_KEY);
    return this.cart;//cart ? JSON.parse(cart) : [];
  }
  saveCart(cart: itemCart[]) {    
    localStorage.setItem(this.CART_KEY,JSON.stringify(cart));    
  }

  addItem(itemCart: itemCart) {
    this.cart.push(itemCart);
  }
  
  removeItem(indexItem: number) {
    this.cart.splice(indexItem, 1); 
  }
 
 
}
