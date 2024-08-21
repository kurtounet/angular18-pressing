import {Injectable} from '@angular/core';
import {IshoppingCartItem} from '../models/shoppingCartItem.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  CART_KEY = 'shopping_cart';
  cartTest: IshoppingCartItem[] = [
    {"id": 1, "categoryId": 1, "serviceId": 2, "quantity": 3, "price": 5},
    {"id": 2, "categoryId": 2, "serviceId": 6, "quantity": 5, "price": 8}
  ];
  lastIdIshoppinCartItem: number = 0;
  cart: IshoppingCartItem[] = [];
  IshoppinCartItemCurrent: IshoppingCartItem = {id: 0, categoryId: 0, serviceId: 0, quantity: 0, price: 0};

  constructor() {
  }

  ngOnInit() {

    // this.cart = this.getCart();

  }

  getCart(): IshoppingCartItem[] {
    //const cart = localStorage.getItem(this.CART_KEY);
    //return cart ? JSON.parse(cart) : [];
    return this.cart;//cart ? JSON.parse(cart) : [];
  }


  addItem(categoryId: number, serviceId: number, quantity: number, price: number) {
    this.lastIdIshoppinCartItem++;
    this.cart.push(
      {
        id: this.lastIdIshoppinCartItem,
        categoryId: categoryId,
        serviceId: serviceId,
        quantity: quantity,
        price: price
      });
    this.saveCart();
    console.log(this.cart);
  }

  udpateItem(id: number) {
    let indexItem = this.cart.findIndex(item => item.id === id);
    console.log(this.cart[indexItem]);
    //this.cart.push(IshoppinCartItem);
    this.saveCart();
  }

  // updateItem(id: number, categoryId?: number, serviceId?: number, quantity?: number, price?: number): void {
  //   const indexItem = this.cart.findIndex(item => item.id === id);
  //   if (indexItem !== -1) {
  //     const item = this.cart[indexItem];
  //     item.categoryId = categoryId ?? item.categoryId;
  //     item.serviceId = serviceId ?? item.serviceId;
  //     item.quantity = quantity ?? item.quantity;
  //     item.price = price ?? item.price;
  //     this.saveCart();
  //   }
  // }

  removeItem(id: number) {
    let indexItem = this.cart.findIndex(item => item.id === id);
    this.cart.splice(indexItem, 1);
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    return this.cart;
  }

  saveCart() {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.cart));
  }

  // getTotalQuantity() {
  //   let totalQuantity = 0;
  //   this.cart.forEach(item => {
  //     totalQuantity += item.quantity;
  //   });
  //   return totalQuantity;
  // }
  validedOder() {
    console.log('validedOder');
  }

}
