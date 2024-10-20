import { HostListener, Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgClass } from '@angular/common';
import { HeaderDashboardComponent } from '../header-dashboard/header-dashboard.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { SidebarService } from '../../services/sidebar.service';
import { UserService } from '../../services/user.service';

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
  sidebarService = inject(SidebarService);
  userService = inject(UserService);

  roles: Array<string> = [];

  ngOnInit(): void {
    this.userService.getAuthCurrentUser().subscribe(data => {
      this.roles = data.roles;
    });
  }

}
