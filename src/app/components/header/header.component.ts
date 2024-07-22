import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';


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
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // if (this.authService.getRole() != "") {
    //   this.isLoggedIn = true
    // }

  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


}
