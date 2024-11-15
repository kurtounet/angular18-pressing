import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../models/client.model';
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  router = inject(Router);
  clientService = inject(ClientService);
  serverErrorMessages: string = "";

  // public signupForm: FormGroup = new FormGroup({
  //   email: new FormControl('anthony@gmail.com', { validators: [Validators.required, Validators.email] }),
  //   password: new FormControl('nirvana', { validators: [Validators.required] }),
  //   secondpassword: new FormControl('nirvana', { validators: [Validators.required] }),
  //   roles: new FormControl(["ROLE_CLIENT", "ROLE_USER"], { validators: [Validators.required] }),
  // });

  public signupForm: FormGroup = new FormGroup({
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { validators: [Validators.required] }),
    secondpassword: new FormControl('', { validators: [Validators.required] }),
    roles: new FormControl(["ROLE_CLIENT", "ROLE_USER"], { validators: [Validators.required] }),
  });
  onSubmit() {
    if (this.signupForm.valid) {
      let client: IClient = this.signupForm.value;
      this.clientService.postClient(client).subscribe({
        next: (data: IClient) => {
          this.router.navigate(['/admin/dashboard']);
        },
        error: (error) => {
          this.serverErrorMessages = error.error.message;
        }
      });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
