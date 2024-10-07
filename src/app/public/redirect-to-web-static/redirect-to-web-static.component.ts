import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-redirect-to-web-static',
  standalone: true,
  imports: [],
  templateUrl: './redirect-to-web-static.component.html',
  styleUrl: './redirect-to-web-static.component.css'
})
export class RedirectToWebStaticComponent implements OnInit {
  ngOnInit(): void {
    window.location.href = '/assets/presentation.html';
  }
}
