import { Component, inject, Inject, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { Iitem } from '../../models/item.model';
import { UserService } from '../../services/user.service';
import { ItemStatusService } from '../../services/item-status.service';
import { CommandeService } from '../../services/commande.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit {
  itemService = inject(ItemService);
  userService = inject(UserService);
  itemStatusService = inject(ItemStatusService);
  commandeService = inject(CommandeService);
  authService = inject(AuthService);

  arrayItems: Iitem[] = [];
  userRoles: Array<string> = [];
  
  ngOnInit(): void {
    this.userRoles = this.authService.getUserRoles();
    //console.log(this.userRoles);
    //this.getAllItems();
    console.log('Item employee',this.getItemsEmployee());
  }
  getAllItems() {
    this.itemService.getAllItems().subscribe(data => {
      this.arrayItems = data;
      console.log(this.arrayItems.map(item => item.quantity));
    });
  }
  getItemsEmployee() {
    this.itemService.getItemsEmployees().subscribe(data => {
      this.arrayItems = data;
     console.log(this.arrayItems);
    });
  }
}
