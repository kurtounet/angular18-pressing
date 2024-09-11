import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
//import { AuthGuard } from './security/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './public/footer/footer.component';
import { HeaderComponent } from './public/header/header.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ShoppingCartComponent } from './admin/shopping-cart/shopping-cart.component';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // VARIABLES
  title = 'Pressing Prestige';


  // INJECTION DEPENDENCIES
  shoppingCartService = inject(ShoppingCartService);
  sideBarService = inject(SidebarService);
  router = inject(Router);

  // START
  ngOnInit(): void {
    // Met a jour la liste des items du panier
    this.shoppingCartService.ngOnInit();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Ferme la sidebar quand on arrive sur une autre page.
        this.sideBarService.toggleSidebar();
      }
    });
  }
}
