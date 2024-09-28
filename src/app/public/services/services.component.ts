import { Component, inject } from '@angular/core';
import { IService } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  arrayServices: IService[] = [];
  serviceService = inject(ServiceService);

  // oneService: Service | null = null;
  //categorySelectedService: Category[]=[];
  //categories: CategoryCollection | null = null;
  //categoryList: Category[] = [];
  // arrayCategorySelectedService: Category[] =[];
  // selectedServicesId: number = 0;

  // selectedCategoryId: number = 0;
  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices() {
    this.serviceService.getAllServices().subscribe(data => {
      this.arrayServices = data;
    });
  }
}
