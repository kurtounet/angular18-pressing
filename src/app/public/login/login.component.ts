import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  title = 'Login';
  authService = inject(AuthService);
  userService = inject(UserService);
  storageService = inject(StorageService);
  router = inject(Router);
  serverErrorMessages: string = '';

  public loginForm: FormGroup = new FormGroup({
    credentials: new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
    }),
  });
  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value.credentials;
      this.authService.login({ username, password }).subscribe(
        (token) => {
          this.storageService.setLocalStorageToken(token.token);
          this.userService.getAuthCurrentUser().subscribe((data) => {
            this.storageService.setLocalStorageUser(data);
          });
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
