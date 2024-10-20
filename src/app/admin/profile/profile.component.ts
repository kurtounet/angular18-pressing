import { Component, inject, OnInit } from '@angular/core';
import { NgIf, DatePipe } from '@angular/common';
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


  today = Date.now();
  userRoles: string[] = [];

  user!: IUser;
  client: IClient | null = null;

  // Injection dependencies
  datePipe = inject(DatePipe);
  authService = inject(AuthService);
  userService = inject(UserService);
  clientService = inject(ClientService);
  router = inject(Router);
  // Préremplit le formulaire
  // public profileForm: FormGroup = new FormGroup({
  //   id: new FormControl(125),
  //   firstname: new FormControl('John', { validators: [Validators.required] }),
  //   lastname: new FormControl('Doe', { validators: [Validators.required] }),
  //   dateborn: new FormControl(this.today, { validators: [Validators.required] }),
  //   email: new FormControl('john.doe@gmail.com', { validators: [Validators.required, Validators.email] }),
  //   mobilephone: new FormControl('0661886398', { validators: [Validators.required, Validators.pattern('^[0-9]*$')] }),
  //   phone: new FormControl('0461886398', { validators: [Validators.pattern('^[0-9]*$')] }),
  //   numadrs: new FormControl(10, { validators: [Validators.required] }),
  //   adrs: new FormControl('chemin de la republique', { validators: [Validators.required] }),
  //   city: new FormControl('Dardilly', { validators: [Validators.required] }),
  //   zipcode: new FormControl('69005', { validators: [Validators.required] }),
  //   country: new FormControl('FRANCE', { validators: [Validators.required] })
  // });
  public profileForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstname: new FormControl(null),
    lastname: new FormControl(null),
    dateborn: new FormControl(null),
    email: new FormControl(null),
    mobilephone: new FormControl(null),
    phone: new FormControl(null),
    numadrs: new FormControl(null),
    adrs: new FormControl(null),
    city: new FormControl(null),
    zipcode: new FormControl(null),
    country: new FormControl(null)
  });

  ngOnInit(): void {
    this.getProfileUser();
  }
  getProfileUser() {
    this.authService.getAuthCurrentUser().subscribe({
      next: (data: IUser) => {
        this.user = data;
        let formattedDate = this.datePipe.transform(data.dateborn, 'yyyy-MM-dd');
        this.profileForm.patchValue({ ...data, dateborn: formattedDate });
      }
    });
  }
  deleteUser() {
    this.clientService.deleteClient(this.user.id).subscribe({
      next: () => {
        //this.authService.deleteLocalStorageUser();
        this.router.navigate(['/login']);
      }
    })
  }
  onSubmit() {
    if (this.profileForm.valid) {
      this.userService.putUser(this.profileForm.value).subscribe({
        next: (data: IUser) => {
          this.authService.setLocalStorageUser(data);
          this.router.navigate(['/admin/dashboard/home']);
        },
        error: (error) => {
          console.error(error.error);
        }
      })
    } else {
      this.profileForm.markAllAsTouched();
    }
  }



}

