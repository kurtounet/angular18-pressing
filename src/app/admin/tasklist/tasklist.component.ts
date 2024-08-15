import { Component, inject, Inject, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { Iitem } from '../../models/item.model';
import { UserService } from '../../services/user.service';
import { ItemStatusService } from '../../services/item-status.service';
import { CommandeService } from '../../services/commande.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { IdCommandeToRefPipe } from '../../pipes/id-commande-to-ref.pipe';
import { IitemStatus } from '../../models/itemStatus.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, IdCommandeToRefPipe],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit {
  itemService = inject(ItemService);
  //userService = inject(UserService);
  itemStatusService = inject(ItemStatusService);
  //commandeService = inject(CommandeService);
  authService = inject(AuthService);

  arrayItems: Iitem[] = [];
  userRoles: Array<string> = [];
  selectedStatusId: number = 0;
  arrayItemStatus: IitemStatus[] = [];
  ngOnInit(): void {
    this.getIitemStatus();

    this.userRoles = this.authService.getUserRoles();
    if (this.userRoles.includes('ROLE_ADMIN')) {
      this.getAllItemsNoAssigned();
    }
    if (this.userRoles.includes('ROLE_EMPLOYEE')) {
      this.getItemsEmployee();

    }
    //console.log(this.userRoles);
    //this.getAllItems();
    // console.log('Item employee', this.getItemsEmployee());
  }
  getIitemStatus(): void {
    this.itemStatusService.getAllItemStatus().subscribe(data => {
      this.arrayItemStatus = data;
    });
  }

  getAllItemsNoAssigned(): void {
    this.itemService.getAllItemsNoAssigned().subscribe(data => {
      this.arrayItems = data;
      console.log(this.arrayItems);
      // console.log(this.arrayItems.map(item => item.quantity));
    });
  }
  getItemsEmployee(): void {
    this.itemService.getItemsEmployee().subscribe(data => {
      this.arrayItems = data;
      // data.forEach(item => {
      //   let newItem = item.itemStatus ? item : { ...item, Status: 0 };
      //   this.arrayItems.push(newItem);
      // })
    });
  }

  selectedStatus(event: any) {
    this.selectedStatusId = event.target.value;
    console.log(this.selectedStatusId);
  }
}
