import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { IService } from '../../models/service.model';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../cart/cart.component';
import { itemCart } from '../../models/itemCart.model';
import { Category } from '../../models/category.model.';
import { environment } from '../../environments/environment';
import { CommandeService } from '../../services/commande.service';
import { ICommande } from '../../models/commande.model';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    FormsModule,
    QuantitySelectorComponent,
    CartComponent,

  ],
  selector: 'app-page-depot',
  templateUrl: './page-depot.component.html',
  styleUrls: ['./page-depot.component.css']
})
export class PageDepotComponent implements OnInit {
  //VARIABLES

  baseUrlImageCategories = environment.baseUrl + environment.assertsImageCategories;
  quantity: number = 2;
  arrayServices: IService[] = [];
  arrayCategoriesOfSelectedService: Category[] = [];
  selectedServicesId: number = 0;
  selectedCategoryId: number = 0;

  //INJECT DEPENDENCIES
  serviceService = inject(ServiceService);
  categoryService = inject(CategoryService);
  serviceCart = inject(CartService);
  serviceCommande = inject(CommandeService);
  authService = inject(AuthService);


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
    this.selectedServicesId = event.target.value;
    this.getCategoriesServiceById(this.selectedServicesId);
  }

  addToCart(categoryId: number) {
    this.serviceCart.addItem(
      categoryId,
      this.selectedServicesId,
      this.quantity,
      10
    );
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
  addCommande() {
    let clientId = this.authService.getLocalStorageUser();
    console.log(clientId);
    let Now = new Date();
    // let commande: ICommande = {
    //   id: null,
    //   ref: null,
    //   client: clientId,
    //   filingDate: Now,
    //   paymentDate: Now,
    //   returnDate: Now

    // }
    // this.serviceCommande.postCommande(commande).subscribe(data => {
    //   console.log(data);
    // });
  }
}
