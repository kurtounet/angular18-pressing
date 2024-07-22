import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicmaincontentComponent } from './publicmaincontent/publicmaincontent.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PublicmaincontentComponent,
    FormsModule,

  ]
})
export class PublicModule { }
