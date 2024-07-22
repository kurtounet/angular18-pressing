import { Component, OnInit, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { Service, ServiceCollection } from '../../models/service.model';


@Component({
  standalone: true,
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [
    CommonModule,

  ],
})
export class LandingComponent implements OnInit {
  servicesList: Service[] | null = null;
  oneService: Service | null = null;
  constructor(private ServiceService: ServiceService) { }
  listCategories: any[] = [];

  ngOnInit() {
    this.loadService();
  }
  loadService() {
    this.ServiceService.getAllServices().subscribe(data => {
      this.servicesList = data;
     // console.log(this.servicesList);
    });
  }




}
