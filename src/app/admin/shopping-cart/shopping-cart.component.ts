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
  // INJECTION DEPENDENCIES
  //constructor(private app: AppComponent) { }
  shoppingCartService = inject(ShoppingCartService);
  // VARIABLES
  baseUrlImageCategories = environment.baseUrl + environment.assertsImageCategories;
  message: string = '';
  tva: number = 20;
  totalServicesQty: number = 0;
  amountTotalTTC: number = 0;
  amountTotalHT: number = 0;
  isVisible: boolean = false;
  arrayShoppingCartItem: IshoppingCartItem[] = [];
  ngOnInit(): void {
    this.getCart();
  }

  // getshoppingTotal() {
  //   this.amountTotalHT = this.round(this.shoppingCartService.getAmount());
  //   this.totalServicesQty = this.shoppingCartService.getQuantity();
  //   this.amountTotalTTC = this.round(this.amountTotalHT + (this.amountTotalHT * this.tva / 100));  // Le montant total TTC (déjà avec la TVA)
  //   console.log('Montant total TTC:', this.amountTotalTTC);
  //   console.log('Montant total HT:', this.amountTotalHT);
  //   console.log('Quantité totale:', this.totalServicesQty);
  // }


  // getItemsCart() {
  //   this.arrayShoppingCartItem = this.shoppingCartService.getCart();
  //   console.log('this.arrayShoppingCartItem')
  // }

  getCart(): void {
    console.log("getCart")
    this.arrayShoppingCartItem = this.shoppingCartService.getCart();
    this.amountTotalHT = this.shoppingCartService.getAmount();

  }

  removeItemCart(item: IshoppingCartItem) {
    this.shoppingCartService.removeItem(item);
    this.getCart();
  }

  clearCart(): void {
    this.shoppingCartService.clearCart();
    this.getCart();
    this.closeShoppingCart();
  }

  validedOrder(): void {
    if (this.arrayShoppingCartItem.length > 0) {
      let resp = this.shoppingCartService.validedOder();
      console.log('ShoppingCartComponent', resp)
      if (resp) {
        this.shoppingCartService.clearCart();
        this.closeShoppingCart();

      } else {
        this.message = "Vérifiez vos informations personnel"
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
