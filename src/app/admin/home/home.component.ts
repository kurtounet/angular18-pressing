import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { NgFor } from '@angular/common';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService);
  user: any | null = null;
  ngOnInit(): void {
    this.getAuthCurrentUser();
  }
  getAuthCurrentUser() {
    this.authService.getAuthCurrentUser().subscribe(data => {
      this.user = data;
    });
  }
}
