import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { IService } from '../../models/service.model';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

import { environment } from '../../environments/environment';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { IshoppingCartItem } from '../../models/shoppingCartItem.model';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ICategory } from '../../models/category.model.';

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
  // VARIABLES
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
  message: string = '';

  // INJECTIONS DES DEPENDANCES
  serviceService = inject(ServiceService);
  categoryService = inject(CategoryService);
  shoppingCartService = inject(ShoppingCartService);
  router = inject(Router);

  // METHODS
  ngOnInit(): void {
    this.getAllServices();
    this.getAllCategories();
  }

  getAllServices() {
    // Récupérer tous les services
    this.serviceService.getAllServices().subscribe(data => {
      this.arrayServices = data;
    });
  }

  getAllCategories() {
    // Récupérer toutes les Catégories pour le panier.
    this.categoryService.getAllCategories().subscribe(data => {
      this.arrayCategories = data;
    });
  }

  selectedService(event: any) {
    // Récupérer l'id du service sélectionné
    this.selectedServicesId = Number(event.target.value);
    // Récupérer les catégories du service sélectionné
    this.getCategoriesOfServiceById(this.selectedServicesId);
  }

  getCategoriesOfServiceById(id: number) {
    if (id !== 0) {
      // Appeler le service pour récupérer les catégories du service sélectionné.
      this.serviceService.getServiceById(id).subscribe(data => {
        // Mettre les catégories dans le tableau arrayCategoriesOfSelectedService.
        this.arrayCategoriesOfSelectedService = data["Category"];
        // Déstructurer les catégories pour leur ajouter la propriété quantité.
        this.arrayTempCategories = this.arrayCategoriesOfSelectedService
          .map(cat => ({ ...cat, quantity: 0 }));
      });
    } else {
      this.getAllCategories();
    }
  }

  addToCart(category: any) {
    // Construction d'un objet IshoppingCartItem
    if (category.quantity !== 0) {
      let itemCart: IshoppingCartItem = {
        id: null,
        service: this.selectedServicesId,
        detailItem: '',
        category: category.id,
        quantity: category.quantity
      };
      // Envoyer le produit au service qui gère le panier
      this.shoppingCartService.addItem(itemCart, this.quantity);
    }
  }

  updateQuantity(categoryId: number, newQuantity: number) {
    // Récupérer l'objet catégorie dont l'id est égal à categoryId
    let category = this.arrayTempCategories.find(cat => cat.id === categoryId);
    // Si l'objet existe
    if (category) {
      // Mettre à jour la quantité
      category.quantity = newQuantity;
    }
  }

  validedOrder(): void {
    if (this.shoppingCartService.shoppingCart.length > 0) {
      const resp = this.shoppingCartService.validedOrder();
      console.log(resp);
      if (resp) {
        this.message = "Commande validée";
        this.router.navigate(['/admin/dashboard/orderlist']);
      } else {
        this.message = "Vérifiez vos informations personnelles";
      }
    } else {
      this.message = "Veuillez choisir au moins un service";
    }
  }
}
