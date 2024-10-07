import { inject, Injectable } from '@angular/core';
import { IshoppingCartItem } from '../models/shoppingCartItem.model';
import { CommandeService } from './commande.service';
import { AuthService } from './auth.service';
import { IposteCommande } from '../models/postCommande.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  // VARIABLES
  CART_KEY = 'shopping_cart';
  lastIdIshoppinCartItem: number = 0;
  shoppingCart: IshoppingCartItem[] = [];
  isCartVisible: boolean = false;
  // INJECTION DEPENDENCIES
  constructor() { }
  serviceCommande = inject(CommandeService)
  authService = inject(AuthService)
  isCommandeValidated: boolean = false;
  ngOnInit() {
    this.shoppingCart = this.getCart();
  }
  getCart(): IshoppingCartItem[] {
    let cart = localStorage.getItem(this.CART_KEY);
    if (cart != null) {
      this.shoppingCart = JSON.parse(cart);
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
    console.log(this.shoppingCart[indexItem]);
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
    console.log('postShoppingCart', itemCart);
  }
  validedOder(): boolean {
    if (this.authService.validcoordanateClient()) {
      let body: IposteCommande = this.serviceCommande.prepareCommande(this.shoppingCart);
      this.serviceCommande.postCommandeClient(body).subscribe(data => {
        console.log(data);
        if (data != null) {
          this.isCommandeValidated = true;
        }
      });
      return this.isCommandeValidated;
    } else {
      return false;
    }
  }
}
