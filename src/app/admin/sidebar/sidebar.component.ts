import { Component, inject, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgClass, NgIf } from '@angular/common';
import { environment } from '../../environments/environment';
import { SidebarService } from '../../services/sidebar.service';

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


  authService = inject(AuthService);
  sidebarService = inject(SidebarService);

  // toggleMenu() {
  //   //this.sidebarService.isVisible = !this.sidebarService.isVisible
  //   this.isOpen = !this.isOpen;
  // }

  logout() {
    this.authService.logOut();
  }
}
