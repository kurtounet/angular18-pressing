import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Iitem } from '../../models/item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IitemStatus } from '../../models/itemStatus.model';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  itemService = inject(ItemService);
  // Recevoir la tâche en tant qu'entrée
  @Input() task!: Iitem;
  @Input() arrayItemStatus: IitemStatus[] = [];
  // Émettre un événement lorsqu'un statut est validé
  @Output() statusChange: EventEmitter<Iitem> = new EventEmitter();

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
  }

  // Méthode pour valider le changement de statut
  validateNewStatus() {
    const newStatus = this.arrayItemStatus.find(status => status.id === this.selectedStatusId);
    if (newStatus) {
      this.task.itemStatus = newStatus; // Met à jour l'objet task avec le nouveau statut
      this.itemService.putItemStatus(this.task).subscribe(data => {
        // Émettre un événement lorsqu'un statut est validé
     
        this.statusChange.emit(data);
      });

    }
  }
}

