import { Directive, HostListener, inject } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Directive({
  // selector: '[appCloseSidebarLinkClick]',
  selector: 'a', // s' applique la directive à toutes les balise <a>

  standalone: true
})
export class CloseSidebarLinkClickDirective {

  sidebarService = inject(SidebarService);

  // @HostListener('click', ['$event']) onClick() {
  //   this.sidebarService.toggleSidebar();
  // }
  @HostListener('click', ['$event'])
  run(event: Event) {
    this.sidebarService.toggleSidebar();
  }

}
