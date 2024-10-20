import { Component, inject, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { CommonModule } from '@angular/common';
import { Iitem } from '../../models/item.model';
import { ItemStatusService } from '../../services/item-status.service';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { IdCommandeToRefPipe } from '../../pipes/id-commande-to-ref.pipe';
import { IitemStatus } from '../../models/itemStatus.model';
import { TaskComponent } from '../task/task.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, IdCommandeToRefPipe, TaskComponent],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit {
  itemService = inject(ItemService);
  userService = inject(UserService);
  itemStatusService = inject(ItemStatusService);
  //commandeService = inject(CommandeService);
  // authService = inject(AuthService);

  arrayTasks: Iitem[] = [];
  userRoles: Array<string> = [];
  selectedStatusId: number = 0;
  arrayItemStatus: IitemStatus[] = [];

  ngOnInit(): void {
    this.getIitemStatus();

    this.userRoles = this.userService.getUserRoles();
    if (this.userRoles.includes('ROLE_ADMIN')) {
      this.getAllItemsNoAssigned();
    }
    if (this.userRoles.includes('ROLE_EMPLOYEE')) {
      this.getItemsEmployee();
    }
  }

  getIitemStatus(): void {
    this.itemStatusService.getAllItemStatus().subscribe(data => {
      this.arrayItemStatus = data;

    });
  }

  getAllItemsNoAssigned(): void {
    this.itemService.getAllItemsNoAssigned().subscribe(data => {
      this.arrayTasks = data;

    });
  }

  getItemsEmployee(): void {
    this.itemService.getItemsEmployee().subscribe(data => {
      this.arrayTasks = data.map(item => {
        return item.itemStatus ? item : { ...item, Status: 0 };
      });

    });
  }
  newStatus() {
    this.ngOnInit();
  }
  selectedStatus(event: any) {
    this.selectedStatusId = event.target.value;

  }
  vstatusValidated() {
    const newStatus = this.arrayItemStatus.find(status => status.id === this.selectedStatusId);
    if (newStatus) {
      this.arrayTasks.forEach(task => {
        if (task.id === task.id) {
          task.itemStatus = newStatus;
        } // Met à jour l'objet task avec le nouveau statut
      });
    }
  }
}
