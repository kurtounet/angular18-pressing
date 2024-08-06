import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { IService} from '../../models/service.model';


@Component({
  standalone: true,
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [
    CommonModule,

  ],
})
export class LandingComponent implements OnInit, OnDestroy {
  servicesList: IService[] | null = null;
  oneService: IService | null = null;
  constructor(private ServiceService: ServiceService) { }
  listCategories: any[] = [];
  flowdata: Subscription | null = null;
  ngOnInit() {
    this.getAllServices(); //this.loadService();
  }
  ngOnDestroy() {
    this.flowdata?.unsubscribe();
  }
  getAllServices() {
    this.flowdata = this.ServiceService.getAllServices().subscribe(data => {
      this.servicesList = data.slice(0,4);     
    });
  }




}
