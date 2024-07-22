import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class ProfileComponent {
  AdressIschecked = false;
  user: User | null = null;
  userForm: FormGroup;
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      id: [null, Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dateborn: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobilephone: ['', Validators.required],
      phone: [''],
      roles: [[], Validators.required],
      numadrs: [null, Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  ngOnInit(): void {
    this.loadUser();

  }
  loadUser() {
    this.userService.getUserById('1').subscribe(data => {
      this.user = data;
      this.userForm.patchValue({
        id: this.user.id,
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        dateborn: this.user.dateborn,
        email: this.user.email,
        mobilephone: this.user.mobilephone,
        phone: this.user.phone,
        roles: this.user.roles,
        numadrs: this.user.numadrs,
        street: this.user.street,
        city: this.user.city,
        zipcode: this.user.zipcode,
        country: this.user.country
      });
    });
  }
  onAdrsChange() {
    this.AdressIschecked = !this.AdressIschecked;
  }



}

