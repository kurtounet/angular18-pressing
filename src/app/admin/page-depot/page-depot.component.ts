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
import { Subscription } from '@lemonsqueezy/lemonsqueezy.js';

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
  flowData!: Subscription;
  quantity: number = 0;
  selectedServiceCheck: boolean = false;
  selectedCategoryCheck: boolean = false;
  arrayServices: IService[] = [];
  arrayTempCategories: any[] = [];
  arrayCategories: ICategory[] = [];
  arrayCategoriesOfSelectedService: ICategory[] = [];
  selectedServicesId: number = 0;
  selectedCategory!: ICategory;
  
  // INJECTIONS DES DEPENDANCES
  serviceService = inject(ServiceService);
  categoryService = inject(CategoryService);
  serviceShoppingCart = inject(ShoppingCartService);
  // METHODS
  ngOnInit(): void {
    this.getAllServices();
  }
  getAllServices() {
    // Récupérer tous les services
    this.serviceService.getAllServices().subscribe(data => {
      this.serviceService.arrayServices = data;
    });
  }
  selectedService(event: any) {
    // récupérer l'id du service selectionné
    this.selectedServicesId = Number(event.target.value);
    // Récuperer les catégories du service selectionné
    this.getCategoriesOfServiceById(this.selectedServicesId);
  }
  getCategoriesOfServiceById(id: number) {
    if (id != 0) {
      // Appeler le service pour récuperer les catégories du service selectionné.
      this.serviceService.getServiceById(id).subscribe(data => {
        // Mettre les catégories dans le tableau arrayCategoriesOfSelectedService.
        this.arrayCategoriesOfSelectedService = data["Category"];
        // déstructurer les catégories pour leurs ajouter la propriété quantité.
        this.arrayTempCategories = this.arrayCategoriesOfSelectedService
          .map(cat => ({ ...cat, quantity: 0 }))
      });
    } else {
      this.categoryService.getAllCategories().subscribe(data => {
        this.arrayCategoriesOfSelectedService = data;
      });
    }
  }
  addToCart(category: any) {
    // Construction d'un objet IshoppingCartItem
    if (category.quantity != 0) {
      let itemCart: IshoppingCartItem = {
        id: null,
        service: this.selectedServicesId,
        detailItem: '',
        category: category.id,
        quantity: category.quantity
      }
      // Envoyer le produit au service qui gère le panier
      this.serviceShoppingCart.addItem(itemCart, this.quantity);
    }
  }
  updateQuantity(categoryId: number, newQuantity: number) {
    // Récupérer l'objet catégorie d' id egale à categoryId
    let category = this.arrayTempCategories.find(cat => cat.id === categoryId);
    // si l'objet existe
    if (category) {
      // Mettre à jour la quantité
      category.quantity = newQuantity;
    }
  }
}
//serviceCommande = inject(CommandeService);
//authService = inject(AuthService);
//popUpIsVisible: boolean = false;
// POPUP
// openPopupSelectedCategory(category: ICategory) {
//   this.selectedCategory = category;
//   this.popUpIsVisible = true;
//   console.log(category);
// }

// closePopup() {
//   this.popUpIsVisible = false;
// }
// abort() {
//   this.popUpIsVisible = false;
// }
// updateQuantity(Id: number, newQuantity: number) {
//   this.quantity = newQuantity;
//   console.log('updateQuantity', categoryId, 'newQuantity:', newQuantity);
//   const category = this.arrayTempCategories.find(cat => cat.id === Id);
//   if (category) {
//     category.quantity = newQuantity;
//   }
// }
