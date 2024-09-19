import { Component, HostListener, inject, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgClass, NgIf } from '@angular/common';
import { environment } from '../../environments/environment';
import { SidebarService } from '../../services/sidebar.service';
import { CloseSidebarLinkClickDirective } from '../../directives/close-sidebar-link-click.directive';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NgIf,
    NgClass,
    CloseSidebarLinkClickDirective
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // isOpen: boolean = false;
  // isDesktop: boolean = false;
  baseUrl = environment.baseUrl;
  @Input() roles: string[] = [];

  authService = inject(AuthService);
  sidebarService = inject(SidebarService);

  logout() {
    this.authService.logOut();
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.sidebarService.isDesktop = window.innerWidth >= 768;
  // }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // if (window.innerWidth >= 768) {
    //   this.sidebarService.isDesktop = true;
    // } else {
    //   this.sidebarService.isDesktop = false;
    // };

  }
}
