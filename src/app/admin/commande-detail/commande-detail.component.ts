import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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



}
