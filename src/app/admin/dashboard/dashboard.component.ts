import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { IUser, User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    SidebarComponent,
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
