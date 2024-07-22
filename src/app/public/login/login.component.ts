import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRequest } from '../../models/auth-request';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from "@angular/forms";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { AuthResponse } from '../../models/auth-response';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInput],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router) {
  }

  authRequest: AuthRequest = new AuthRequest();
  authResponse: AuthResponse = new AuthResponse('');
  isLoading: boolean = false;
  token: string = '';
  error?: string;

  ngOnInit(): void {
    this.login();
  }
  login() {
    this.isLoading = true;
    // ADMIN
    // this.authRequest.username = 'marc.johnson@gmail.com';
    // this.authRequest.password = 'Marc';
    // EMPLOYEE
    // this.authRequest.username = 'john.smith@gmail.com';
    // this.authRequest.password = 'John';
    // CUSTOMER
    this.authRequest.username = 'emma.wilson@gmail.com';
    this.authRequest.password = 'Emma';
    this.authService.authentication(this.authRequest).subscribe({
      next: (data: AuthResponse) => {
        this.authService.setLocalStorageToken(data.token);
        // this.authService.getAuthCurrentUser().subscribe(data => {
        //   //this.authService.setLocalStorageUser(data);
        // });
        this.router.navigate(["/admin/dashboard"]);
      },
      error: (error) => {
        console.error('Error loading login:', error);
      }

    });
  }

}
