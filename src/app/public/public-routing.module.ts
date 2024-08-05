import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PagepresentationComponent } from './pagepresentation/pagepresentation.component';
import { PagecontactComponent } from './pagecontact/pagecontact.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PublicContentComponent } from './public-content/public-content.component';

const routes: Routes = [
  // { 
  //   path: '', component: PublicContentComponent,
  //   children: [
  //     { path: '', component: LandingComponent }, // Root path should be empty
  //     { path: 'accueil', component: LandingComponent },
  //     { path: 'presentation', component: PagepresentationComponent },
  //     { path: 'nous-contactez', component: PagecontactComponent },
  //     { path: 'login', component: LoginComponent },
  //     { path: 'signup', component: SignupFormComponent },
  //   ]
  // },
];
/* OK */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
