import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../models/user.model'; // Assurez-vous de mettre le bon chemin vers l'interface
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {   

   public signupForm:FormGroup = new FormGroup({
    //id: new FormControl(null),  // Optionnel, peut être généré automatiquement
    firstname: new FormControl('', { validators: [Validators.required] }),
    lastname: new FormControl('', { validators: [Validators.required] }),
    dateborn: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    mobilephone: new FormControl('', { validators: [Validators.required, Validators.pattern('^[0-9]*$')] }),
    phone: new FormControl('', { validators: [Validators.pattern('^[0-9]*$')] }),
    roles: new FormControl([], { validators: [Validators.required] }),
    numadrs: new FormControl(null, { validators: [Validators.required] }),
    street: new FormControl('', { validators: [Validators.required] }),
    city: new FormControl('', { validators: [Validators.required] }),
    zipcode: new FormControl('', { validators: [Validators.required] }),
    country: new FormControl('', { validators: [Validators.required] })
  });

  onSubmit() {
    if (this.signupForm.valid) {
      const user = this.signupForm.value;
      console.log('User Submitted:', user);      
    } else {
      this.signupForm.markAllAsTouched(); // Pour afficher les erreurs
    }
  }
}



