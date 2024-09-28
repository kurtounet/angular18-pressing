import { Routes } from '@angular/router';
//import { AuthGuard } from './security/guards/auth.guard';
/* SITE */
import { Error404Component } from './public/error404/error404.component';
import { PublicContentComponent } from './public/public-content/public-content.component';
import { LandingComponent } from './public/landing/landing.component';

import { PagecontactComponent } from './public/pagecontact/pagecontact.component';
import { LoginComponent } from './public/login/login.component';
import { SignupFormComponent } from './public/signup-form/signup-form.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './admin/home/home.component';
import { PageDepotComponent } from './admin/page-depot/page-depot.component';
import { OrderlistComponent } from './admin/orderlist/orderlist.component';
import { TasklistComponent } from './admin/tasklist/tasklist.component';

import { ProfileComponent } from './admin/profile/profile.component';
import { ContactComponent } from './admin/contact/contact.component';
import { authGuard } from './security/guards/admin.guard';
import { ShoppingCartComponent } from './admin/shopping-cart/shopping-cart.component';
import { ServicesComponent } from './public/services/services.component';


export const routes: Routes = [
  {
    path: '', component: PublicContentComponent,
    children: [
      { path: '', component: LandingComponent }, // Root path should be empty
      { path: 'home', component: LandingComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: PagecontactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupFormComponent },
    ]
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent, canActivate: [authGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'depot', component: PageDepotComponent },
      { path: 'orderlist', component: OrderlistComponent },
      { path: 'tasklist', component: TasklistComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'profil', component: ProfileComponent },
      { path: 'contact', component: ContactComponent },

    ]
  },
  { path: '**', component: Error404Component }

];

