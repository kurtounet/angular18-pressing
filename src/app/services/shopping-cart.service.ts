import { inject, Injectable } from '@angular/core';
import { IshoppingCartItem } from '../models/shoppingCartItem.model';
import { CommandeService } from './commande.service';
import { AuthService } from './auth.service';
import { IposteCommande } from '../models/postCommande.model';
import { ItemService } from './item.service';
import { Iitem } from '../models/item.model';
import { UserService } from './user.service';
import { Router } from 'express';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  // VARIABLES
  CART_KEY = 'shopping_cart';
  lastIdIshoppinCartItem: number = 0;
  shoppingCart: IshoppingCartItem[] = [];
  isCartVisible: boolean = false;
  tva: number = 20;
  totalServicesQty: number = 0;
  amountTotalTTC: number = 0;
  amountTotalHT: number = 0;
  // INJECTION DEPENDENCIES
  constructor() { }

  serviceCommande = inject(CommandeService)
  serviceItem = inject(ItemService)
  userService = inject(UserService)
  //authService = inject(AuthService)
  isCommandeValidated: boolean = false;
  amount: number = 0; // amount
  ngOnInit() {
    this.shoppingCart = this.getCart();

  }
  getAmount(): any {
    let items = this.shoppingCart.map(item => {
      return {
        service: item.service,
        quantity: item.quantity
      }
    }
    );
    this.serviceItem.getAmount(items).subscribe(data => {
      this.amount = Number(data.amount);
    })
    return this.amount;

  }
  getQuantity(): any {
    //this.getAmount();
    return this.shoppingCart.length;
  }

  getAmountTotalTTC(amountTotalHT: number): any {
    return this.round(amountTotalHT + (amountTotalHT * this.tva / 100));
  }
  round(num: number) {
    let precision = 2;
    return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision); // Résultat : 4.57
  }

  getCart(): IshoppingCartItem[] {
    let cart = localStorage.getItem(this.CART_KEY);
    if (cart != null) {
      this.shoppingCart = JSON.parse(cart);
      this.amount = this.getAmount();
      return this.shoppingCart;
    }
    return [];
  }
  addItem(itemCart: IshoppingCartItem, quantite: number) {
    //chercher si le produit existe dans le panier
    let item = this.shoppingCart.find((item) => item.category === itemCart.category);
    // si le produit existe, on ajoute la quantite
    if (item) {
      item.quantity += itemCart.quantity;
    } else {
      this.lastIdIshoppinCartItem++;
      // sinon, on ajoute le produit au panier
      this.shoppingCart.push(itemCart);
    }
    this.saveCart();
  }
  udpateItem(id: number) {
    let indexItem = this.shoppingCart.findIndex(item => item.id === id);

    //this.cart.push(IshoppinCartItem);
    this.saveCart();
  }
  removeItem(item: IshoppingCartItem) {
    let indexItem = this.shoppingCart.findIndex(item => item.id === item.id);
    this.shoppingCart.splice(indexItem, 1);
    this.saveCart();
  }
  clearCart() {
    this.shoppingCart = [];
    localStorage.removeItem(this.CART_KEY);
    return this.shoppingCart;
  }
  saveCart() {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.shoppingCart));
  }
  postShoppingCart(itemCart: IshoppingCartItem[]) {

  }
  validedOrder(): boolean {
    if (this.userService.validcoordanateClient()) {
      let body: IposteCommande = this.serviceCommande.prepareCommande(this.shoppingCart);

      this.serviceCommande.postCommandeClient(body).subscribe(data => {
        console.log(data);
        if (data != null) {
          this.isCommandeValidated = true;
          this.clearCart();
        }
      });
      return this.isCommandeValidated;
    } else {
      return false;
    }
  }
}
