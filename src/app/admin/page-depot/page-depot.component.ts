import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { IService } from '../../models/service.model';
import { CommonModule, DatePipe, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';

import { ICategory } from '../../models/category.model.';
import { environment } from '../../environments/environment';
import { CommandeService } from '../../services/commande.service';
import { ICommande } from '../../models/commande.model';
import { AuthService } from '../../services/auth.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";
import { IshoppingCartItem } from '../../models/shoppingCartItem.model';

@Component({
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    FormsModule,
    QuantitySelectorComponent,
    ShoppingCartComponent
  ],

  selector: 'app-page-depot',
  templateUrl: './page-depot.component.html',
  styleUrls: ['./page-depot.component.css']
})
export class PageDepotComponent implements OnInit {
  //VARIABLES

  baseUrlImageCategories = environment.baseUrl + environment.assertsImageCategories;
  quantity: number = 1;
  arrayServices: IService[] = [];
  arrayCategoriesOfSelectedService: ICategory[] = [];
  selectedServicesId: number = 0;
  selectedCategoryId: number = 0;

  //INJECT DEPENDENCIES
  serviceService = inject(ServiceService);
  categoryService = inject(CategoryService);
  serviceShoppingCart = inject(ShoppingCartService);
  //serviceCommande = inject(CommandeService);
  //authService = inject(AuthService);



  //METHODS
  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices() {
    this.serviceService.getAllServices().subscribe(data => {
      this.arrayServices = data;
    });
  }

  getCategoriesServiceById(id: number) {
    this.serviceService.getServiceById(id).subscribe(data => {
      this.arrayCategoriesOfSelectedService = data['Category'];
    });
  }

  selectedService(event: any) {
    this.selectedServicesId = Number(event.target.value);
    this.getCategoriesServiceById(this.selectedServicesId);
  }

  addToCart(category: ICategory) {
    let itemCart: IshoppingCartItem = {
      id: null,
      serviceId: this.selectedServicesId,
      categoryId: category.id,
      quantity: this.quantity     
    }
    this.serviceShoppingCart.addItem(itemCart, this.quantity);       
  }

  updateQuantity(categoryId: number, newQuantity: number) {
    this.quantity = newQuantity;
    // console.log('updateQuantity', categoryId, 'newQuantity:', newQuantity);
    // const category = this.arrayCategorySelectedService.find(cat => cat.id === categoryId);
    // if (category) {
    //   category.quantity = newQuantity;
    // }
  }

  // getQuantity(newQty: number) {
  //   this.quantity = newQty;
  //   console.log(this.quantity);
  // }
}
