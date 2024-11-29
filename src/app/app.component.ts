import { HeaderComponent } from './componentes/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AuthService } from './service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cardapio';

  constructor(private authService : AuthService){}

  isLoggedIn(): boolean {
    return this.authService.isLogged();
  }
}
