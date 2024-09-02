import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../models/client.model';
import { Router } from "@angular/router";

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

  public signupForm: FormGroup = new FormGroup({
    // id: new FormControl(null),  // Optionnel, peut être généré automatiquement
    // firstname: new FormControl('MOI', {validators: [Validators.required]}),
    // lastname: new FormControl('Anthony', {validators: [Validators.required]}),
    // dateborn: new FormControl(null),
    // dateborn: new FormControl(null, { validators: [Validators.required] }),
    email: new FormControl('anthony@gmail.com', { validators: [Validators.required, Validators.email] }),
    password: new FormControl('nirvana', { validators: [Validators.required] }),
    secondpassword: new FormControl('nirvana', { validators: [Validators.required] }),
    // mobilephone: new FormControl('0000000000', {validators: [Validators.required, Validators.pattern('^[0-9]*$')]}),
    // phone: new FormControl('0000000000', {validators: [Validators.pattern('^[0-9]*$')]}),
    roles: new FormControl(["ROLE_CLIENT"], { validators: [Validators.required] }),
    // numadrs: new FormControl(10, {validators: [Validators.required]}),
    // adrs: new FormControl('chemin de la paix', {validators: [Validators.required]}),
    // city: new FormControl('dijon', {validators: [Validators.required]}),
    // zipcode: new FormControl('7000', {validators: [Validators.required]}),
    // country: new FormControl('FRANCE', {validators: [Validators.required]})
  });

  onSubmit() {
    if (this.signupForm.valid) {
      let client = this.signupForm.value as IClient;
      console.log(client)

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

  //
}
