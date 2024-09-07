import { Component, inject, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.css'
})
export class HeaderDashboardComponent {
  // VARIABLES
  isVisibleCart: boolean = false;

  // INJECTIONS DEPENDANCIES
  constructor(private app: AppComponent) { }
  appShoppingCartService = this.app.shoppingCartService;

  // FUNCTIONS
  visibleCart() {
    this.isVisibleCart = !this.isVisibleCart;
    this.app.isCartVisible = this.isVisibleCart;
    console.log(this.isVisibleCart);
  }


}
