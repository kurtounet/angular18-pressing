import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Iitem } from '../../models/item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IitemStatus } from '../../models/itemStatus.model';
import { ItemStatusService } from '../../services/item-status.service';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // Injection des services
  // itemStatusService = inject(ItemStatusService);
  itemService = inject(ItemService);

  @Input() task!: Iitem; // Recevoir la tâche en tant qu'entrée
  @Input() arrayItemStatus: IitemStatus[] = [];
  @Output() statusChange: EventEmitter<Iitem> = new EventEmitter(); // Émettre un événement lorsqu'un statut est validé

  selectedStatusId!: number; // Statut sélectionné
  //arrayItemStatus: IitemStatus[] = []; // Liste des statuts disponibles

  // Initialisation du composant et récupération des statuts
  ngOnInit() {
    // this.loadItemStatuses();
  }

  // Récupérer les statuts disponibles via le service
  // loadItemStatuses() {
  //   this.itemStatusService.getAllItemStatus().subscribe({
  //     next: (statuses) => {
  //       this.arrayItemStatus = statuses;
  //     },
  //     error: (err) => {
  //       console.error('Error loading item statuses:', err);
  //     }
  //   });
  // }

  // Méthode pour capturer la sélection du statut
  selectedStatus(event: any) {

    this.selectedStatusId = Number(event.target.value);
    console.log(`Selected status ID: ${this.selectedStatusId} for task ID: ${this.task.id}`);
  }

  // Méthode pour valider le changement de statut
  validateNewStatus() {
    const newStatus = this.arrayItemStatus.find(status => status.id === this.selectedStatusId);
    if (newStatus) {
      this.task.itemStatus = newStatus; // Met à jour l'objet task avec le nouveau statut
      this.itemService.patchItemStatus(this.task).subscribe(data => {
        console.log(data);
      });
      //this.statusChange.emit(this.task); // Émet l'événement avec la tâche mise à jour
      console.log(`Status updated to: ${newStatus.name} for task ID: ${this.task.id}`);
    }
  }
}

