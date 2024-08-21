import { Component, inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { IUser } from '../../models/user.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../models/client.model';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports: [
    NgIf,
    ReactiveFormsModule,
  ]
})
export class ProfileComponent implements OnInit {

  AdressIschecked = false;
  user: IUser | null = null;
  authService = inject(AuthService);
  userService = inject(UserService);
  clientService = inject(ClientService);
  router = inject(Router);
  today = Date.now();
  public profileForm: FormGroup = new FormGroup({
    id: new FormControl(null),  // Optionnel, peut être généré automatiquement
    firstname: new FormControl('Anthony', { validators: [Validators.required] }),
    lastname: new FormControl('Moi', { validators: [Validators.required] }),
    dateborn: new FormControl(this.today, { validators: [Validators.required] }),
    email: new FormControl('anthony@gmail.com', { validators: [Validators.required, Validators.email] }),
    mobilephone: new FormControl('0661972538', { validators: [Validators.required, Validators.pattern('^[0-9]*$')] }),
    phone: new FormControl('0661972538', { validators: [Validators.pattern('^[0-9]*$')] }),
    numadrs: new FormControl(10, { validators: [Validators.required] }),
    adrs: new FormControl('chemin de la republique', { validators: [Validators.required] }),
    city: new FormControl('Dardilly', { validators: [Validators.required] }),
    zipcode: new FormControl('69005', { validators: [Validators.required] }),
    country: new FormControl('FRANCE', { validators: [Validators.required] })
  });


  ngOnInit(): void {
    this.getProfileUser();

  }

  getProfileUser() {
    this.authService.getAuthCurrentUser().subscribe({

      next: (data: IUser) => {
        if (data && data.dateborn) {
          let date = new Date(data.dateborn);
          if (date) { // Check if date is valid
            const formattedDate = date.toISOString().split('T')[0];

          }
        }
        this.profileForm.patchValue(data);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.user = this.profileForm.value;
      // this.clientService.patchClient(this.user).subscribe({
      //   next: (data: IClient) => {
      //     this.router.navigate(['/admin/dashboard/Home']);
      //   },
      //   error: (error) => {
      //     console.error(error);
      //   }
      // })
    } else {
      this.profileForm.markAllAsTouched(); // Pour afficher les erreurs
    }
  }

  onAdrsChange() {
    this.AdressIschecked = !this.AdressIschecked;
  }

}

