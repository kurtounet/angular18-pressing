import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgClass, NgIf } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NgIf,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isOpen: boolean = true;
  baseUrl = environment.baseUrl;
  @Input() roles: string[] = [];

  constructor(
    private authService: AuthService,
  ) {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }



  logout() {
    this.authService.logOut();
  }
}
