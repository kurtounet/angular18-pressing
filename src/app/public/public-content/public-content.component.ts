import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';


import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-public-content',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent],
  templateUrl: './public-content.component.html',
  styleUrl: './public-content.component.css'
})
export class PublicContentComponent {

}
