import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  title = 'Login';
  loginForm: FormGroup = new FormGroup({}); // Initialisation
  authService = inject(AuthService);
  router = inject(Router);


  serverErrorMessages: string = '';
  ngOnInit() {
    this.loginForm = new FormGroup({
      credentials: new FormGroup({
        username: new FormControl('anthony@gmail.com', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('nirvana', [
          Validators.required,
          Validators.minLength(2),
        ]),
      }),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value.credentials;

      this.authService.login({ username, password }).subscribe(
        (token) => {
          this.authService.setLocalStorageToken(token.token);
          this.authService.getAuthCurrentUser().subscribe((data) => {
            this.authService.setLocalStorageUser(data);
          });
          // Redirection après authentification
          this.router.navigate(['/admin/dashboard']);
        },
        (error) => {
          this.serverErrorMessages = error.error.message;
          console.error('Login failed', error.error.message);

        }
      );
    }
  }
}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AuthRequest } from '../../models/auth-request';

// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { FormsModule } from "@angular/forms";
// import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
// import { MatInput } from "@angular/material/input";
// import { AuthResponse } from '../../models/auth-response';
// import { AuthService } from '../../services/auth.service';
// import { UserService } from '../../services/user.service';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     MatFormField,
//     MatLabel,
//     MatError,
//     MatInput],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   constructor(
//     private authService: AuthService,
//     private userService: UserService,
//     private router: Router) {
//   }

//   authRequest: AuthRequest = new AuthRequest();
//   authResponse: AuthResponse = new AuthResponse('');
//   isLoading: boolean = false;
//   token: string = '';
//   error?: string;

//   ngOnInit(): void {
//     this.login();
//   }
//   login() {

//     // ADMIN
//     // this.authRequest.username = 'marc.johnson@gmail.com';
//     // this.authRequest.password = 'Marc';
//     // EMPLOYEE
//     // this.authRequest.username = 'john.smith@gmail.com';
//     // this.authRequest.password = 'John';
//     // CUSTOMER
//     this.authRequest.username = 'emma.wilson@gmail.com';
//     this.authRequest.password = 'Emma';
//     this.authService.authentication(this.authRequest).subscribe({
//       next: (data: AuthResponse) => {
//         this.authService.setLocalStorageToken(data.token);
//         this.authService.getAuthCurrentUser().subscribe(data => {
//           this.authService.setLocalStorageUser(data);
//         });
//         this.router.navigate(["/admin/dashboard"]);
//       },
//       error: (error) => {
//         console.error('Error loading login:', error);
//       }

//     });
//   }

// }
