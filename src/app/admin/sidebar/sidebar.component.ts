import { Component, Input } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NgIf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  baseUrl = environment.baseUrl;

  constructor(
    private authService: AuthService,
  ) { }
  @Input() roles: Array<string> = [];

  ngOnInit(): void {
  }
  logout() {
    this.authService.logOut();
  }
}
