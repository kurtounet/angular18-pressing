import { Component, inject } from '@angular/core';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { IshoppingCartItem } from '../../models/shoppingCartItem.model';
import { NameCategoryByIdPipe } from '../../pipes/name-category-by-id.pipe';
import { CategoryService } from '../../services/category.service';
import { NameServiceByIdPipe } from '../../pipes/name-service-by-id.pipe';
import { ServiceService } from '../../services/service.service';
import { AppComponent } from '../../app.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, QuantitySelectorComponent, NameCategoryByIdPipe, NameServiceByIdPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  // VARIABLES
  baseUrlImageCategories = environment.baseUrl + environment.assertsImageCategories;
  message: string = '';
  total: number = 0;
  isVisible: boolean = false;
  arrayShoppingCartItem: IshoppingCartItem[] = [];

  // INJECTION DEPENDENCIES
  //constructor(private app: AppComponent) { }
  shoppingCartService = inject(ShoppingCartService);


  ngOnInit(): void {
    this.getItemsCart();
  }

  getItemsCart() {
    this.arrayShoppingCartItem = this.shoppingCartService.getCart();
  }

  updateCart(): void {
    this.arrayShoppingCartItem = this.shoppingCartService.getCart();
  }

  removeItemCart(item: IshoppingCartItem) {
    this.shoppingCartService.removeItem(item);
    this.updateCart();
  }

  clearCart(): void {
    this.shoppingCartService.clearCart();
    this.updateCart();
    this.closeShoppingCart();
  }

  validedOrder(): void {
    if (this.arrayShoppingCartItem.length > 0) {
      let resp = this.shoppingCartService.validedOder();
      if (resp) {
        this.shoppingCartService.clearCart();
        this.closeShoppingCart();
        this.message = "La commande a bien été validée"
      } else {
        this.message = "Vérifiez votre panier vos informations personner et votre adresse."
      }
    }

  }

  changeQuantity(event: any) {
    console.log("changeQuantity")
    let qty = event.target.value;
  }
  //FUNCTIONS
  openShoppingCart() {
    this.shoppingCartService.isCartVisible = true;
  }

  closeShoppingCart() {
    this.shoppingCartService.isCartVisible = false;
  }

}
