import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { CommonModule, NgFor } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ItemService } from '../../services/item.service';
import { Iitem } from '../../models/item.model';
import { ServiceService } from '../../services/service.service';
import { CategoryService } from '../../services/category.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  userService = inject(UserService);
  serviceService = inject(ServiceService);
  categoryService = inject(CategoryService);


  user: any | null = null;

  ngOnInit(): void {
    this.getAuthCurrentUser();
    this.getAllServices();
    this.getAllCategories();
  }

  getAuthCurrentUser() {
    this.userService.getAuthCurrentUser().subscribe(data => {
      this.user = data;
      
    });
  }
  getAllServices() {
    this.serviceService.getAllServices().subscribe(services => {
      this.serviceService.arrayServices = services;
    }
    );
  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categoryService.arrayCategories = categories;
    });
  }



}
