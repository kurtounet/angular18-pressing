import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../models/user.model'; // Assurez-vous de mettre le bon chemin vers l'interface
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../models/client.model';
@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  //userService = inject(UserService);
  clientService = inject(ClientService);

  public signupForm: FormGroup = new FormGroup({
    //id: new FormControl(null),  // Optionnel, peut être généré automatiquement
    firstname: new FormControl('MOI', { validators: [Validators.required] }),
    lastname: new FormControl('Anthony', { validators: [Validators.required] }),
    dateborn: new FormControl(null),
    // dateborn: new FormControl(null, { validators: [Validators.required] }),
    email: new FormControl('anthony@gmail.com', { validators: [Validators.required, Validators.email] }),
    mobilephone: new FormControl('0000000000', { validators: [Validators.required, Validators.pattern('^[0-9]*$')] }),
    phone: new FormControl('0000000000', { validators: [Validators.pattern('^[0-9]*$')] }),
    //roles: new FormControl([], { validators: [Validators.required] }),
    numadrs: new FormControl(10, { validators: [Validators.required] }),
    adrs: new FormControl('chemin de la paix', { validators: [Validators.required] }),
    city: new FormControl('dijon', { validators: [Validators.required] }),
    zipcode: new FormControl('7000', { validators: [Validators.required] }),
    country: new FormControl('FRANCE', { validators: [Validators.required] })
  });

  onSubmit() {

    if (this.signupForm.valid) {
      let client = this.signupForm.value;
      this.clientService.postClient(client).subscribe({
        next: (data: IClient) => {
          console.log(data);
        },
        error: (error) => {
          console.error(error);
        }
      })
    } else {
      this.signupForm.markAllAsTouched(); // Pour afficher les erreurs
    }
  }
}



