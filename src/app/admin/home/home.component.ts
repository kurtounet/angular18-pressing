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

  user: any | null = null;
  ngOnInit(): void {
    this.getAuthCurrentUser();
    // this.getAllItems();
    this.getAddItems();
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
  getAddItems() {
    let item: Iitem =
    {
      "id": null,
      "service": "/api/services/32",
      "commande": "/api/commandes/11",
      "itemStatus": "/api/item_statuses/7",
      "detailItem": " Rien a signalé",
      "price": 11.51,
      "quantity": 5,
      "employee": "/api/employees/11"
    };

    this.itemsService.postItem(item).subscribe(data => {
      // console.log('data', data);
    });

  }
}
