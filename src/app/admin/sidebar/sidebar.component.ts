import {Component, Input} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {NgIf} from '@angular/common';
import {environment} from '../../environments/environment';

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
  @Input() roles: Array<string> = [];

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logOut();
  }
}
