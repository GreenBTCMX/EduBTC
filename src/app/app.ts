import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faWallet, faServer, faMicrochip, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {  
  protected readonly title = signal('EduBTC');
  
  // Cambia private a public para el router
  constructor(public router: Router) {}
  
  // Define los iconos que vas a usar
  faHome = faHome;
  faWallet = faWallet;
  faServer = faServer;
  faMicrochip = faMicrochip;
  faLock = faLock;

  // Método para navegación
  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}