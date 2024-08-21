import {Component, inject, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {NgIf} from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterModule, NgIf],
})
export class HeaderComponent implements OnInit {
  menuOpen: boolean = false;
  isLoggedIn: boolean = false;
  authService = inject(AuthService);

  ngOnInit(): void {
    this.testIsloggind();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  testIsloggind() {
    if (this.authService.getLocalStorageToken() === "") {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }


}
