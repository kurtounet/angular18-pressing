import { Component, NgModule, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { Service, ServiceCollection } from '../../models/service.model';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CategoryService } from '../../services/category.service';
import { Category, CategoryCollection } from '../../models/category.model.';
import { AuthService } from '../../services/auth.service';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';
import { CartService } from '../../services/cart.service';


interface Card {
  id: number;
  title: string;
}
@Component({
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,    
    FormsModule,
    QuantitySelectorComponent],
  selector: 'app-page-depot',
  templateUrl: './page-depot.component.html',
  styleUrl: './page-depot.component.css'
})
export class PageDepotComponent implements OnInit {
  constructor(
    private dataService: ServiceService,
    private categotyService: CategoryService,
    private cart: CartService

  ) { }

  arrayServices: Service[] = [];
  oneService: Service | null = null;
  categorySelectedService: Category[] = [];
  categories: CategoryCollection | null = null;

  arrayCategorySelectedService: Category[] = [];
  selectedServicesId: number = 0;
  selectedCategoryId: number = 0;
  ngOnInit(): void {
    this.getAllServices();
  }
  getAllServices() {
    this.dataService.getAllServices().subscribe(data => {
      this.arrayServices = data;
    });
  }

  getServiceById(id: string) {
    this.dataService.getServiceById(id).subscribe(data => {
      // this.oneService = data;
      this.arrayCategorySelectedService = data['Category'];
      console.log(this.arrayCategorySelectedService);
    });
  }

  // loadCategories() {
  //   this.categotyService.getAllCategories().subscribe(data => {
  //     this.categories = data;
  //     // console.log(this.categories);
  //   });
  // }
  selectedService(event: any) {
    this.getServiceById(event.target.value);
  }
  selectedCathegorie(category: any) {
    console.log(category);
    //this.cart.addToCart(category);
  }
  addCart(category: any) {
   // this.cart.addToCart(category);
    console.log(this.cart);
  }
  removeCart(category: any) {
   // this.cart.removeFromCart(category);
    console.log(this.cart);
  }
}
