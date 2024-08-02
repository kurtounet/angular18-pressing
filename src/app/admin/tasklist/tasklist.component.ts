import { Component, Inject, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit {
  itemService=Inject(ItemService);
  ngOnInit(): void {
    
  }
  getAllItems(): void {
    this.itemService.getAllItems(); 
  }
}
