import { Component} from '@angular/core'; 
import { RouterOutlet } from '@angular/router'; 
//import { AuthGuard } from './security/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { FooterComponent } from './public/footer/footer.component';
import { HeaderComponent } from './public/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pressing Prestige';
}
