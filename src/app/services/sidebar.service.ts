import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isDesktop: boolean = false;
  isOpen: boolean = false;
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

}
