import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './security/guards/auth.guard';
/* SITE */
 
import { LandingComponent } from './public/landing/landing.component';

/* ADMIN */
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './public/login/login.component';


export const routes: Routes = [
    { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
     
];

