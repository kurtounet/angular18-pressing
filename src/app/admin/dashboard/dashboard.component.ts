import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

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
  ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  authService = inject(AuthService);

  roles: Array<string> = [];
  // user: User | null = null;
  // currentUser: User = new User();

  ngOnInit(): void {
    this.authService.getAuthCurrentUser().subscribe(data => {
      this.roles = data.roles;
    });
  }


}
