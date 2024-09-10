import { inject, Injectable } from '@angular/core';
import { IshoppingCartItem } from '../models/shoppingCartItem.model';
import { CommandeService } from './commande.service';
import { AuthService } from './auth.service';
import { IposteCommande } from '../models/postCommande.model';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  // VARIABLES
  CART_KEY = 'shopping_cart';
  lastIdIshoppinCartItem: number = 0;
  shoppingCart: IshoppingCartItem[] = [];

  // INJECTION DEPENDENCIES
  constructor() { }
  serviceCommande = inject(CommandeService)
  serviceAuth = inject(AuthService)

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

  validedOder(): string {
    let validcoordanateClient = true;
    if (validcoordanateClient) {
      let body: IposteCommande = this.serviceCommande.prepareCommande(this.shoppingCart);
      this.serviceCommande.postCommandeClient(body).subscribe(data =>
        console.log(data)
      )
      return "Envois au serviceCommand"
    } else {
      return "Coordonnées du client non remplit";
    }

  }
}

/*
CART_KEY = 'shopping_cart';

  constructor() { }

  cartTest: IshoppingCartItem[] = [
    { "id": 1, "categoryId": 1, "serviceId": 2, "quantity": 3, "price": 5 },
    { "id": 2, "categoryId": 2, "serviceId": 6, "quantity": 5, "price": 8 }
  ];
  lastIdIshoppinCartItem: number = 0;
  cart: IshoppingCartItem[] = [];
  IshoppinCartItemCurrent: IshoppingCartItem = { id: 0, categoryId: 0, serviceId: 0, quantity: 0, price: 0 };
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
*/
/*
import { Injectable } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private items: CartItem[] = [];

  constructor() { }

  // Ajouter un article au panier
  addToCart(item: CartItem): void {
    const existingItem = this.items.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push({ ...item });
    }
  }

  // Mettre à jour la quantité d'un article dans le panier
  updateQuantity(itemId: number, quantity: number): void {
    const item = this.items.find(cartItem => cartItem.id === itemId);
    if (item) {
      if (quantity > 0) {
        item.quantity = quantity;
      } else {
        this.removeItem(itemId);
      }
    }
  }

  // Supprimer un article du panier
  removeItem(itemId: number): void {
    this.items = this.items.filter(cartItem => cartItem.id !== itemId);
  }

  // Récupérer le contenu du panier
  getItems(): CartItem[] {
    return this.items;
  }

  // Vider le panier
  clearCart(): void {
    this.items = [];
  }

  // Calculer le total du panier
  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

*/
