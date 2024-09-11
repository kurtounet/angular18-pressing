import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { AuthGuard } from './security/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './public/footer/footer.component';
import { HeaderComponent } from './public/header/header.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ShoppingCartComponent } from './admin/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // VARIABLES
  title = 'Pressing Prestige';
  //isCartVisible: boolean = false;

  // INJECTION DEPENDENCIES
  shoppingCartService = inject(ShoppingCartService);

  // START
  ngOnInit(): void {
    // start Service
    this.shoppingCartService.ngOnInit();

  }

}
