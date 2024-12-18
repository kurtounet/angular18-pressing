import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { IService } from '../../models/service.model';
import { environment } from '../../environments/environment';
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [
    CommonModule,
    RouterLink
  ],
})
export class LandingComponent implements OnInit, OnDestroy {
  //VARIABLES
  imageIntroduction = environment.baseUrl + '/site/landing-page-pressing.webp';
  baseUrlImageServices = `${environment.baseUrl}${environment.assertsImageServices}`;
  servicesList: IService[] | null = null;
  flowdata: Subscription | null = null;

  //INJECT DEPENDENCIES
  serviceService = inject(ServiceService);
  ngOnInit() {
    this.getAllServices();
  }

  ngOnDestroy() {
    this.flowdata?.unsubscribe();
  }

  getAllServices() {
    this.flowdata = this.serviceService.getAllServices().subscribe(data => {
      // limit the number of service
      this.servicesList = data.slice(0, 4);
    });
  }


}
