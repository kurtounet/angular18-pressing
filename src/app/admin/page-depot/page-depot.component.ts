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
import { Router } from '@angular/router';

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
  message: string = "";
  // INJECTIONS DES DEPENDANCES

  serviceService = inject(ServiceService);
  categoryService = inject(CategoryService);
  router = inject(Router);
  serviceShoppingCart = inject(ShoppingCartService);
  // METHODS
  ngOnInit(): void {
    this.getAllServices();
    this.getAllCategories();
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
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categoryService.arrayCategories = data;
    });
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
      this.getAllCategories();
      // this.categoryService.getAllCategories().subscribe(data => {
      //   this.arrayCategoriesOfSelectedService = data;
      // });
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
  validedOrder(): void {
    if (this.serviceShoppingCart.shoppingCart.length > 0) {
      let resp = this.serviceShoppingCart.validedOrder();
      if (resp) {
        this.message = "Commande validee"
        this.serviceShoppingCart.clearCart();
        this.router.navigate(['/admin/dashboard/orderlist']);
      } else {
        this.message = "Vérifiez vos informations personnel"
      }
    } else {
      this.message = "Votre panier est vide"
    }
  }

}
