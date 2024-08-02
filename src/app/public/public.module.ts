import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicContentComponent } from './public-content/public-content.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PublicContentComponent,
    FormsModule,
    ]
})
export class PublicModule { }
