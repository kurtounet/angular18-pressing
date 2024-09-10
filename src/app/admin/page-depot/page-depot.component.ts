import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { IService } from '../../models/service.model';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../models/category.model.';
import { environment } from '../../environments/environment';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";
import { IshoppingCartItem } from '../../models/shoppingCartItem.model';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';
import { map } from 'rxjs';

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
  quantity: number = 0;

  selectedServiceCheck: boolean = false;
  selectedCategoryCheck: boolean = false;
  popUpIsVisible: boolean = false;

  arrayServices: IService[] = [];
  arrayTempCategories: any[] = [];
  arrayCategories: ICategory[] = [];
  arrayCategoriesOfSelectedService: ICategory[] = [];
  selectedServicesId: number = 0;
  selectedCategory!: ICategory;



  //INJECT DEPENDENCIES
  serviceService = inject(ServiceService);
  categoryService = inject(CategoryService);
  serviceShoppingCart = inject(ShoppingCartService);
  //serviceCommande = inject(CommandeService);
  //authService = inject(AuthService);



  //METHODS
  ngOnInit(): void {
    this.getAllServices();
    //this.getAllCategories();
  }

  getAllServices() {
    this.serviceService.getAllServices().subscribe(data => {
      this.serviceService.arrayServices = data;

    });
  }

  selectedService(event: any) {
    this.selectedServicesId = Number(event.target.value);
    //this.selectedServiceCheck = !this.selectedServiceCheck;
    this.getCategoriesOfServiceById(this.selectedServicesId);
  }

  getCategoriesOfServiceById(id: number) {
    if (id != 0) {
      this.serviceService.getServiceById(id).subscribe(data => {
        this.arrayCategoriesOfSelectedService = data["Category"];
        this.arrayTempCategories = this.arrayCategoriesOfSelectedService.map(cat => ({ ...cat, quantity: 0 }))
      });

    } else {
      this.categoryService.getAllCategories().subscribe(data => {
        this.arrayCategoriesOfSelectedService = data;
        console.log(id)
      });
    }

  }


  // POPUP
  openPopupSelectedCategory(category: ICategory) {
    this.selectedCategory = category;
    this.popUpIsVisible = true;
    console.log(category);
  }

  closePopup() {
    this.popUpIsVisible = false;
  }
  addToCart(category: any) {
    if (category.quantity != 0) {
      let itemCart: IshoppingCartItem = {
        id: null,
        service: this.selectedServicesId,
        detailItem: '',
        category: category.id,
        quantity: category.quantity
      }
      this.serviceShoppingCart.addItem(itemCart, this.quantity);
    }
  }
  abort() {
    this.popUpIsVisible = false;
  }
  // updateQuantity(Id: number, newQuantity: number) {
  //   this.quantity = newQuantity;
  //   console.log('updateQuantity', categoryId, 'newQuantity:', newQuantity);
  //   const category = this.arrayTempCategories.find(cat => cat.id === Id);
  //   if (category) {
  //     category.quantity = newQuantity;
  //   }
  // }
  updateQuantity(categoryId: number, newQuantity: number) {
    let category = this.arrayTempCategories.find(cat => cat.id === categoryId);
    if (category) {
      category.quantity = newQuantity;
    }

  }

}
