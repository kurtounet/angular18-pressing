import { Injectable } from '@angular/core';

export interface CartItem {
  productId: number;
  quantity: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly CART_KEY = 'shopping_cart';

  constructor() { }

  // Get all items in the cart
  getCart(): CartItem[] {
    const cart = localStorage.getItem(this.CART_KEY);
    return cart ? JSON.parse(cart) : [];
  }

  // Add a new item to the cart
  addToCart(item: CartItem): void {
    const cart = this.getCart();
    const index = cart.findIndex(cartItem => cartItem.productId === item.productId);

    if (index !== -1) {
      cart[index].quantity += item.quantity;
    } else {
      cart.push(item);
    }

    this.saveCart(cart);
  }

  // Update the quantity of a specific item in the cart
  updateCartItem(productId: number, quantity: number): void {
    const cart = this.getCart();
    const index = cart.findIndex(cartItem => cartItem.productId === productId);

    if (index !== -1) {
      cart[index].quantity = quantity;
      this.saveCart(cart);
    }
  }

  // Remove an item from the cart
  removeFromCart(productId: number): void {
    const cart = this.getCart();
    const updatedCart = cart.filter(cartItem => cartItem.productId !== productId);
    this.saveCart(updatedCart);
  }

  // Supprimer le panier
  clearCart(): void {
    localStorage.removeItem(this.CART_KEY);
  }

  // Sauvegarder le panier dans localStorage
  private saveCart(cart: CartItem[]): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }
}
