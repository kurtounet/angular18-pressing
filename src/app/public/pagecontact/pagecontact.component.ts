import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagecontact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pagecontact.component.html',
  styleUrl: './pagecontact.component.css'
})
export class PagecontactComponent {

  otherSubject: boolean = false;
 
  public contactForm:FormGroup=new FormGroup({
    // email: new FormControl('',{validators:[Validators.required,Validators.email, motsInterdits]}),
    subject: new FormControl('', {validators:[Validators.required]}),
    othersubject: new FormControl('', {validators:[Validators.required]}),
    firstname: new FormControl('', {validators:[Validators.required]}),
    lastname: new FormControl('', {validators:[Validators.required]}),
    email: new FormControl('', {validators:[Validators.required, Validators.email]}),
    message: new FormControl('', {validators:[Validators.required]}),   

  });
  

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log(formData);
      // this.contactForm.reset();  
      
    }
  }

  activeOtherSubject(event: any) {
    this.otherSubject= !this.otherSubject;
    let subject = event.target.value;
    if (subject === 'Autre') {
      this.contactForm.get('othersubject')?.enable();
    } else {  
      this.contactForm.get('othersubject')?.disable();
    }
  }

}
