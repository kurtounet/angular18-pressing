import { Component, inject, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../../services/sidebar.service';

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
  constructor(private app: AppComponent) { }
  appShoppingCartService = this.app.shoppingCartService;
  sidebarService = inject(SidebarService)

  // FUNCTIONS
  visibleCart() {
    this.isVisibleCart = !this.isVisibleCart;
    this.app.isCartVisible = this.isVisibleCart;
  }
  visibleSidebar() {
    console.log("this.isVisibleSideBar")
    this.isVisibleSideBar = !this.isVisibleSideBar
    this.sidebarService.toggleSidebar();
    console.log(this.isVisibleSideBar)
  }
  sidebar() { console.log(this.isVisibleSideBar) }

}
