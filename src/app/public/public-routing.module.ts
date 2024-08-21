import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
export class PublicRoutingModule {
}
