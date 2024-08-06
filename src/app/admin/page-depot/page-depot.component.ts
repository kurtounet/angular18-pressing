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


  serviceService = inject(ServiceService);
  categoryService = inject(CategoryService);
  serviceCart = inject(CartService);


  quantity: number = 2;

  arrayServices: IService[] = [];
  arrayCategorySelectedService: Category[] = [];
  selectedServicesId: number = 0;
  selectedCategoryId: number = 0;

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
      this.arrayCategorySelectedService = data['Category'];
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
}
