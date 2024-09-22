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
  router = inject(Router);
  serverErrorMessages: string = '';

  public loginForm: FormGroup = new FormGroup({
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
  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value.credentials;
      console.log(this.loginForm.value);
      this.authService.login({ username, password }).subscribe(
        (token) => {
          this.authService.setLocalStorageToken(token.token);
          this.authService.getAuthCurrentUser().subscribe((data) => {
            this.authService.setLocalStorageUser(data);
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
