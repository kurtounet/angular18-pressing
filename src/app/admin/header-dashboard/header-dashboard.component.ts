import { Component, inject, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../../services/sidebar.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.css'
})
export class HeaderDashboardComponent {
  // VARIABLES
  isVisibleCart: boolean = false;
  isVisibleSideBar: boolean = true;

  // INJECTIONS DEPENDANCIES
  //constructor(private app: AppComponent) { }
  //appShoppingCartService = this.app.shoppingCartService;
  shoppingCartService = inject(ShoppingCartService)
  sidebarService = inject(SidebarService)

  // FUNCTIONS
  visibleCart() {
    this.isVisibleCart = !this.isVisibleCart;
    this.shoppingCartService.isCartVisible = this.isVisibleCart;
  }
  openSidebar() {
    this.sidebarService.isOpen = true;
  }


}
