import {Component, inject} from '@angular/core';
import {QuantitySelectorComponent} from '../quantity-selector/quantity-selector.component';
import {CommonModule} from '@angular/common';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {IshoppingCartItem} from '../../models/shoppingCartItem.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, QuantitySelectorComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  shoppingCartService = inject(ShoppingCartService);
  arrayShoppingCartItem: IshoppingCartItem[] = [];
  total: number = 0;

  // items = [
  //   { name: 'Produit 1', description: 'Description du produit 1', price: 10, quantity: 1 },
  //   { name: 'Produit 2', description: 'Description du produit 2', price: 20, quantity: 2 }
  // ];
  ngOnInit(): void {
    this.arrayShoppingCartItem = this.shoppingCartService.getCart();
    console.log(this.arrayShoppingCartItem);
  }

  removeItemCart(item: IshoppingCartItem) {
    this.shoppingCartService.removeItem(item);
    console.log(this.arrayShoppingCartItem);
  }

  clearCart(): void {
    this.arrayShoppingCartItem = this.shoppingCartService.clearCart();
  }

  validedOrder(): void {
    if (this.arrayShoppingCartItem.length > 0) {
      this.shoppingCartService.validedOder();
      this.arrayShoppingCartItem = [];
    }
  }

  changeQuantity(event: any) {
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
