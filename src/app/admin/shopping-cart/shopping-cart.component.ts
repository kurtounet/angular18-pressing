import { Component, inject, SimpleChanges } from '@angular/core';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { IshoppingCartItem } from '../../models/shoppingCartItem.model';
import { NameCategoryByIdPipe } from '../../pipes/name-category-by-id.pipe';
import { CategoryService } from '../../services/category.service';
import { CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, QuantitySelectorComponent, NameCategoryByIdPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  shoppingCartService = inject(ShoppingCartService);
  arrayShoppingCartItem: IshoppingCartItem[] = [];


  total: number = 0;
  ngOnInit(): void {
    this.arrayShoppingCartItem = this.shoppingCartService.getCart();
    console.log(this.arrayShoppingCartItem);
  }
  // ngChanges(changes: SimpleChanges) {
  //   if(changes){
  //     this.arrayShoppingCartItem = this.shoppingCartService.getCart();
  //   }
  //   console.log(changes)
  // }
  updateCart(): void {
    this.arrayShoppingCartItem = this.shoppingCartService.getCart();
  }

  removeItemCart(item: IshoppingCartItem) {
    this.shoppingCartService.removeItem(item);
    this.updateCart();
    console.log(this.arrayShoppingCartItem);
  }

  clearCart(): void {
    this.shoppingCartService.clearCart();
    this.updateCart(); 
  }

  validedOrder(): void {
    console.log(this.arrayShoppingCartItem);
    if (this.arrayShoppingCartItem.length > 0) {
      let resp = this.shoppingCartService.validedOder();
      console.log(resp)
    }
  }

  changeQuantity(event: any) {
    console.log("changeQuantity")
    let qty = event.target.value;
    // const { item, quantity, change } = event;
    // const index = this.arrayShoppingCartItem.findIndex(i => i === item);
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


}
/*
 cartItems = this.cartService.getItems();
  total = this.cartService.getTotal();

  constructor(private cartService: ShoppingCartService) {}

  addToCart(item): void {
    this.cartService.addToCart(item);
    this.updateCart();
  }

  updateQuantity(itemId: number, quantity: number): void {
    this.cartService.updateQuantity(itemId, quantity);
    this.updateCart();
  }

  removeItem(itemId: number): void {
    this.cartService.removeItem(itemId);
    this.updateCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.updateCart();
  }

  private updateCart(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }
*/

