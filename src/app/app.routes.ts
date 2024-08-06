import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './security/guards/auth.guard';
/* SITE */


import { Error404Component } from './public/error404/error404.component';
import { PublicContentComponent } from './public/public-content/public-content.component';
import { LandingComponent } from './public/landing/landing.component';
import { PagepresentationComponent } from './public/pagepresentation/pagepresentation.component';
import { PagecontactComponent } from './public/pagecontact/pagecontact.component';
import { LoginComponent } from './public/login/login.component';
import { SignupFormComponent } from './public/signup-form/signup-form.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './admin/home/home.component';
import { PageDepotComponent } from './admin/page-depot/page-depot.component';
import { OrderlistComponent } from './admin/orderlist/orderlist.component';
import { TasklistComponent } from './admin/tasklist/tasklist.component';
import { CartComponent } from './admin/cart/cart.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ContactComponent } from './admin/contact/contact.component';
import { authGuard } from './security/guards/admin.guard';


export const routes: Routes = [
  // { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), },
  {
    path: '', component: PublicContentComponent,
    children: [
      { path: '', component: LandingComponent }, // Root path should be empty
      { path: 'accueil', component: LandingComponent },
      { path: 'presentation', component: PagepresentationComponent },
      { path: 'nous-contactez', component: PagecontactComponent },
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
      { path: 'cart', component: CartComponent },
      { path: 'profil', component: ProfileComponent },
      { path: 'contact', component: ContactComponent },

    ]
  },
  { path: '**', component: Error404Component }

];

