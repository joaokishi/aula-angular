import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule, MatTabsModule],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  selectedIndex = 0; // Controla a aba selecionada

  constructor(private router: Router) {}

  // Lida com a troca de abas
  onTabChange(event: any): void {
    const index = event.index;

    switch (index) {
      case 0:
        this.router.navigate(['/app-home']);
        break;
      case 1:
        this.router.navigate(['/app-word-analyzer']);
        break;
      case 2:
        this.router.navigate(['/app-simple-calculator']);
        break;
      case 3:
        this.router.navigate(['/app-consulta-cep']);
        break;
      default:
        break;
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
