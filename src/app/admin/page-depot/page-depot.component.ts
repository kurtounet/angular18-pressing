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
  providers: [DatePipe],
  selector: 'app-page-depot',
  templateUrl: './page-depot.component.html',
  styleUrls: ['./page-depot.component.css']
})
export class PageDepotComponent implements OnInit {
  //VARIABLES

  baseUrlImageCategories = environment.baseUrl + environment.assertsImageCategories;
  quantity: number = 2;
  arrayServices: IService[] = [];
  arrayCategoriesOfSelectedService: ICategory[] = [];
  selectedServicesId: number = 0;
  selectedCategoryId: number = 0;

  //INJECT DEPENDENCIES
  serviceService = inject(ServiceService);
  categoryService = inject(CategoryService);
  serviceShoppingCart = inject(ShoppingCartService);
  serviceCommande = inject(CommandeService);
  authService = inject(AuthService);
  datePipe = inject(DatePipe);


  //METHODS
  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices() {
    this.serviceService.getAllServices().subscribe(data => {
      this.arrayServices = data;
      console.log(this.arrayServices);
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
      quantity: this.quantity,
      price: 10
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

  getQuantity(newQty: number) {

    this.quantity = newQty;
    console.log(this.quantity);
  }

  formatDateTime(date: Date): string | null {
    return this.datePipe.transform(date, 'yyyy-MM-dd\'T\'HH:mm:ssZZZZZ'); // datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
  }

  addCommande() {
    let formattedDate = this.formatDateTime(new Date());
    //console.log(formattedDate); // Affiche la date au format PHP: '2024-08-13 10:45:00'
    let clientId = this.authService.getLocalStorageUser().id;
    console.log(clientId);

    let commande: ICommande = {
      id: null,
      ref: '',
      client: '/api/clients/' + clientId,
      filingDate: this.formatDateTime(new Date()) ?? '',
      paymentDate: this.formatDateTime(new Date()) ?? '',
      returnDate: this.formatDateTime(new Date()) ?? ''
    }
    console.log(commande);
    /*
    this.serviceCommande.postCommande(commande).subscribe(data => {
      console.log(data);
      if (data) {
        this.serviceShoppingCart.postShoppingCart(this.arrayItemsCart).subscribe(data => console.log(data)); //clearCart();
      }
    });
    */
  }
}
