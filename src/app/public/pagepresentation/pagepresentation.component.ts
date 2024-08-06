import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { IService} from '../../models/service.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-pagepresentation',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './pagepresentation.component.html',
  styleUrl: './pagepresentation.component.css'
})
export class PagepresentationComponent implements OnInit {
  constructor(
    private serviceService: ServiceService
  ) { }

  arrayServices: IService[]=[];
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
