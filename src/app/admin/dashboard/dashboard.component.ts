import { HostListener, Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgClass } from '@angular/common';
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    SidebarComponent,
    ShoppingCartComponent,
    HeaderDashboardComponent,
    RouterLink,
    NgClass
  ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isDesktop: boolean = false;
  //sidebarService = inject(SidebarService)


  authService = inject(AuthService);

  roles: Array<string> = [];
  constructor(public sidebarService: SidebarService) {
    this.checkViewportWidth();
  }
  // Vérifier la taille de l'écran au chargement et lors du redimensionnement
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkViewportWidth();
  }

  checkViewportWidth() {
    //this.isDesktop = window.innerWidth >= 768;  // Bootstrap md size
  }

  ngOnInit(): void {

    this.authService.getAuthCurrentUser().subscribe(data => {
      this.roles = data.roles;
    });

  }


}
