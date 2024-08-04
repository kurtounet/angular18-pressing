import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { authGuard } from '../service/auth.guard';
import { HomeComponent } from './home/home.component';
import { PageDepotComponent } from './page-depot/page-depot.component';

import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
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
  }
]
/* OK  */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
