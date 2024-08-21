import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//import { authGuard } from '../service/auth.guard';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   children: [
  //     { path: '', component: HomeComponent },
  //     { path: 'home', component: HomeComponent },
  //     { path: 'depot', component: PageDepotComponent },
  //     { path: 'orderlist', component: OrderlistComponent },
  //     { path: 'tasklist', component: TasklistComponent },
  //     { path: 'cart', component: CartComponent },
  //     { path: 'profil', component: ProfileComponent },
  //     { path: 'contact', component: ContactComponent },

  //   ]
  // }
]

/* OK  */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
