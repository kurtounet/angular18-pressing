import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicmaincontentComponent } from './publicmaincontent/publicmaincontent.component';
import { LandingComponent } from './landing/landing.component';
import { PagepresentationComponent } from './pagepresentation/pagepresentation.component';
import { PagecontactComponent } from './pagecontact/pagecontact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'accueil', component: LandingComponent },
  { path: 'presentation', component: PagepresentationComponent },
  { path: 'nous-contactez', component: PagecontactComponent },
  { path: 'login', component: LoginComponent },

];
/* OK */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
