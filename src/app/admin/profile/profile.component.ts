import { Component, inject, Inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { IUser, User } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { error } from 'console';
import { UserService } from '../../services/user.service';
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

  public profileForm: FormGroup = new FormGroup({
    id: new FormControl(null),  // Optionnel, peut être généré automatiquement
    firstname: new FormControl('', { validators: [Validators.required] }),
    lastname: new FormControl('', { validators: [Validators.required] }),
    dateborn: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    mobilephone: new FormControl('', { validators: [Validators.required, Validators.pattern('^[0-9]*$')] }),
    phone: new FormControl('', { validators: [Validators.pattern('^[0-9]*$')] }),
    numadrs: new FormControl(null, { validators: [Validators.required] }),
    adrs: new FormControl('', { validators: [Validators.required] }),
    city: new FormControl('', { validators: [Validators.required] }),
    zipcode: new FormControl('', { validators: [Validators.required] }),
    country: new FormControl('', { validators: [Validators.required] })
  });



  ngOnInit(): void {
    this.getProfileUser();

  }
  getProfileUser() {
    this.authService.getAuthCurrentUser().subscribe({
      
      next: (data: IUser) => {
        console.log(data);
        if (data && data.dateborn) {
          const formattedDate = new Date(data.dateborn).toISOString().split('T')[0];
          data.dateborn = formattedDate;
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
      this.userService.patchUser(this.user?.id, this.user).subscribe({
        next: (data: IUser) => {
          console.log('DATA', data);
        },
        error: (error) => {
          console.error(error);
        }
      })
    } else {
      this.profileForm.markAllAsTouched(); // Pour afficher les erreurs
    }
  }
  onAdrsChange() {
    this.AdressIschecked = !this.AdressIschecked;
  }

}

