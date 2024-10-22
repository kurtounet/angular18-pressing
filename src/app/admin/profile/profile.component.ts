import { Component, inject, OnInit } from '@angular/core';
import { NgIf, DatePipe, CommonModule } from '@angular/common';
import { IUser } from '../../models/user.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../models/client.model';
import { StorageService } from '../../services/storage.service';
import { AddressService } from '../../services/address.service';
import { IFeature, IFeatureCollection } from '../../models/address.model';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports: [
    CommonModule,
    NgIf,
    ReactiveFormsModule,
  ]
})
export class ProfileComponent implements OnInit {

  country: string = 'FRANCE';
  city: string = 'Dardilly';
  zipcode: string = '69570';
  today = Date.now();
  userRoles: string[] = [];
  user!: IUser;
  client: IClient | null = null;
  arrayAdresses: string[] = [];
  arrayFeatureCollection: IFeatureCollection[] = [];

  // Injection dependencies
  datePipe = inject(DatePipe);
  //authService = inject(AuthService);
  storageService = inject(StorageService);
  userService = inject(UserService);
  clientService = inject(ClientService);
  addressService = inject(AddressService);
  router = inject(Router);

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
    city: new FormControl(this.city),
    zipcode: new FormControl(null),
    country: new FormControl(this.country)
  });

  ngOnInit(): void {
    this.getProfileUser();
    this.getAdress();
  }
  getAdress() {
    this.addressService.getFeatureCollection(10, this.city).subscribe({
      next: (data: any) => {
        this.arrayFeatureCollection = data;
        console.log('DATA', data.features);
        this.arrayAdresses = data.features.map((feature: IFeature) => {
          return feature.properties.label;
        })
        console.log(this.arrayAdresses);
      }
    })
  }
  formattedDate(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  getProfileUser() {
    this.userService.getAuthCurrentUser().subscribe({
      next: (data: IUser) => {
        this.user = data;
        // let formattedDate = this.datePipe.transform(data.dateborn, 'yyyy-MM-dd');
        this.profileForm.patchValue({ ...data, dateborn: this.formattedDate(data.dateborn) });
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
  loadUser() {
    // Préremplit le formulaire
    // this.profileForm.patchValue({
    //   ...this.user,
    //   firstname: this.user.firstname,
    //   lastname: this.user.lastname,
    //   email: this.user.email,
    //   dateborn: this.formattedDate(this.user.dateborn),
    //   mobilephone: this.user.mobilephone,
    //   phone: 01234567890,
    //   numadrs: "Chemin des saules",
    //   adrs: 10,
    //   city: this.city,
    //   zipcode: this.zipcode,
    //   country: this.country,

    // });
    this.profileForm = new FormGroup({
      id: new FormControl(this.user.id),
      firstname: new FormControl('Anthony', { validators: [Validators.required] }),
      lastname: new FormControl('Bossut', { validators: [Validators.required] }),
      dateborn: new FormControl(null, { validators: [Validators.required] }),
      email: new FormControl(this.user.email, { validators: [Validators.required, Validators.email] }),
      mobilephone: new FormControl('01234567890', { validators: [Validators.required, Validators.pattern('^[0-9]*$')] }),
      phone: new FormControl('01234567890', { validators: [Validators.pattern('^[0-9]*$')] }),
      numadrs: new FormControl(10, { validators: [Validators.required] }),
      adrs: new FormControl('chemin des saules', { validators: [Validators.required] }),
      city: new FormControl(this.city, { validators: [Validators.required] }),
      zipcode: new FormControl(this.zipcode, { validators: [Validators.required] }),
      country: new FormControl(this.country, { validators: [Validators.required] })
    });
    // let bornDate: Date = new Date('27/11/1982');
    // this.profileForm.patchValue({ dateborn: this.formattedDate(bornDate) });
  }
  onSubmit() {
    if (this.profileForm.valid) {
      this.userService.putUser(this.profileForm.value).subscribe({
        next: (data: IUser) => {
          this.storageService.setLocalStorageUser(data);
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

