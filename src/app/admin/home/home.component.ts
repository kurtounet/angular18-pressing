import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { NgFor } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ItemService } from '../../services/item.service';
import { Iitem } from '../../models/item.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService);
  itemsService = inject(ItemService);
  itemsList: Iitem[] = [];

  item: Iitem =
    {
      "id": 16,
      "service": "/api/services/341",
      "commande": "/api/commandes/91",
      "itemStatus": "/api/item_statuses/86",
      "detailItem": " Item change",
      "price": 11.51,
      "quantity": 5,
      "employee": "/api/employees/123"
    };

  user: any | null = null;
  ngOnInit(): void {
    this.getAuthCurrentUser();
    this.UpdateItem(this.item);
   // this.getAddItems();
    this.getAllItems();
  }
  getAuthCurrentUser() {
    this.authService.getAuthCurrentUser().subscribe(data => {
      this.user = data;
    });
  }
  getAllItems() {
    return this.itemsService.getAllItems().subscribe(data => {
      this.itemsList = data;

    });
  }
  UpdateItem(item: Iitem) {
    return this.itemsService.patchItem(item.id, item).subscribe(data => {
      console.log('data', data);
    });
  }
  AddItem() { 
    this.itemsService.postItem(this.item).subscribe(data => {
       console.log('data', data);
    });

  }
}
