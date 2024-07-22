import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './security/guards/auth.guard';
/* SITE */
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './public/landing/landing.component';

/* ADMIN */
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './public/login/login.component';
/*
import { PanierComponent } from './pages/panier/panier.component'; // En supposant que vous l'utiliserez plus tard

import { PaiementComponent } from './pages/paiement/paiement.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { PageDepotComponent } from './pages/admin/page-depot/page-depot.component';
import { OrderlistComponent } from './pages/admin/orderlist/orderlist.component';
import { CartComponent } from './pages/admin/cart/cart.component';
*/

export const routes: Routes = [
    { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    // Configuration pour la redirection ou les routes 404
    //{ path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }, // Gestion 404
];
/*
{ path: 'landing', component: LandingComponent },
{ path: 'admin/dashboard', component: DashboardComponent },
{ path: 'login', component: LoginComponent },

    
    {
        path: 'admin',
        children: [
{ path: 'paiement', component: PaiementComponent },
            { path: 'page-depot', component: PageDepotComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'orderlist', component: OrderlistComponent },
            { path: 'shopping-cart', component: CartComponent },
            { path: 'settings', component: SettingsComponent },

        ],
    },
];*/
