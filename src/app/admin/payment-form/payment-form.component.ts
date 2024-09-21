import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {

  public paymentForm: FormGroup = new FormGroup({
    id: new FormControl(null),  // Optionnel, peut être généré automatiquement
    firstname: new FormControl(null),
    lastname: new FormControl(null),
    email: new FormControl(null),
    mobilephone: new FormControl(null),
    phone: new FormControl(null),
    numadrs: new FormControl(null),
    adrs: new FormControl(null),
    city: new FormControl(null),
    zipcode: new FormControl(null),
    country: new FormControl(null)
  });

}
