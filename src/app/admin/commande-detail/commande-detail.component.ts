import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iitem } from '../../models/item.model';

@Component({
  selector: 'app-commande-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commande-detail.component.html',
  styleUrl: './commande-detail.component.css'
})
export class CommandeDetailComponent {

  @Input() arrayItemCommande!: Iitem[];
  @Output() totalCommande: EventEmitter<number> = new EventEmitter();

  calculateTotalCommande() {
    
    // let total = this.arrayItemCommande.reduce(
    //   (a: number, b: Iitem) => a + b.price?, 0
    // );
    // this.totalCommande.emit(total);

    return 5;

  }




}
