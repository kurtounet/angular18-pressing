import { Injectable } from '@angular/core';
 
import { itemCart } from '../models/itemCart.model';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  CART_KEY = 'shopping_cart';

  constructor() { }

 cartTest: itemCart[]=[
  {   "id": 1,   "categoryId": 1,   "serviceId": 2,   "quantity": 3,   "price": 5}, 
  {   "id": 2,    "categoryId": 2,    "serviceId": 6,    "quantity": 5,    "price": 8   }
 ];
  lastIdItemCart:number = 0;
  cart: itemCart[] = [];
  itemCartCurrent: itemCart = { id: 0, categoryId: 0, serviceId: 0, quantity: 0, price: 0 };
  ngOInit() {

   // this.cart = this.getCart();
    
  }
  getCart(): itemCart[] {
    //const cart = localStorage.getItem(this.CART_KEY);
    //return cart ? JSON.parse(cart) : [];
    return this.cart;//cart ? JSON.parse(cart) : [];
  }
  saveCart(cart: itemCart[]) {    
    localStorage.setItem(this.CART_KEY,JSON.stringify(cart));    
  }

  addItem(categoryId: number, serviceId: number, quantity: number, price: number) {
    this.lastIdItemCart++;
    this.cart.push(
      {
      id: this.lastIdItemCart,
      categoryId: categoryId,
      serviceId: serviceId,
      quantity: quantity,
      price: price
    });
    console.log(this.cart); 
  }
  udpateItem(id: number) {
    let indexItem = this.cart.findIndex(item => item.id === id);
    console.log(this.cart[indexItem]);     
    //this.cart.push(itemCart);
  }
  
  removeItem(id: number) {
    let indexItem = this.cart.findIndex(item => item.id === id);
    this.cart.splice(indexItem, 1); 
  }
  clearCart() {
    this.cart = [];
  }
  getTotalQuantity() {  
    let totalQuantity = 0;
    this.cart.forEach(item => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  }
 
 
}
