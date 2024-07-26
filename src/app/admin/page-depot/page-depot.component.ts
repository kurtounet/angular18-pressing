import { Component,OnInit } from '@angular/core';

 
import { ServiceService } from '../../services/service.service';
import { Service} from '../../models/service.model';
import { CommonModule, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { CategoryService } from '../../services/category.service';
import { Category, CategoryCollection } from '../../models/category.model.';
 
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';
import { CartService } from '../../services/cart.service';
import { CartComponent } from '../cart/cart.component';
import { itemCart } from '../../models/itemCart.model';


interface Card {
  id: number;
  title: string;
}
@Component({
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,    
    FormsModule,
    QuantitySelectorComponent,
    CartComponent,
],
  selector: 'app-page-depot',
  templateUrl: './page-depot.component.html',
  styleUrl: './page-depot.component.css'
})
export class PageDepotComponent implements OnInit {
  constructor(
    private dataService: ServiceService,
    private categotyService: CategoryService,
    private serviceCart: CartService

  ) { }
  itemCartInitial: itemCart = { id: 0, categoryId: 0, serviceId: 0, quantity: 0, price: 0 };
  //itemCartCurrent: itemCart = itemCartInitial;
  quantity: number = 1;
   
  arrayServices: Service[] = [];
  oneService: Service | null = null;
  categorySelectedService: Category[] = [];
  categories: CategoryCollection | null = null;

  arrayCategorySelectedService: Category[] = [];
  selectedServicesId: number = 0;
  selectedCategoryId: number = 0;
  ngOnInit(): void {
    this.getAllServices();
  }
  getAllServices() {
    this.dataService.getAllServices().subscribe(data => {
      this.arrayServices = data;
    });
  }

  getServiceById(id: string) {
    this.dataService.getServiceById(id).subscribe(data => {
      // this.oneService = data;
      this.arrayCategorySelectedService = data['Category'];
      console.log(this.arrayCategorySelectedService);
    });
  }

  // loadCategories() {
  //   this.categotyService.getAllCategories().subscribe(data => {
  //     this.categories = data;
  //     // console.log(this.categories);
  //   });
  // }
  selectedService(event: any) {
    this.getServiceById(event.target.value);
    this.selectedServicesId = event.target.value ;  
    console.log('Service selected: ' , this.selectedServicesId);
  }
  selectedCathegorie(event: any) {   
    this.selectedCategoryId = event.target.value;
    console.log('Cathegorie selected',this.selectedCategoryId);  
     
  }
  addToCart(categoryid: number) {
      this.serviceCart.addItem(      
      categoryid,
      this.selectedServicesId,       
      this.quantity,
      0
    );    
  }
 
  getQuantity(event: any) {
    this.quantity = event.target.value;
    console.log(this.quantity) ;        /*
    const index = this.items.findIndex(i => i === item);
    if (index !== -1) {
      this.items[index].quantity += change;
      if (this.items[index].quantity < 1) {
        this.items[index].quantity = 1; // pour éviter les quantités négatives
      }
    }*/
  }
}
