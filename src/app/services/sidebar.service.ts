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
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.isDesktop = window.innerWidth > 768;
  }

}
