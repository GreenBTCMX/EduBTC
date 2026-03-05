import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './security.html',
  styleUrl: './security.css'
})
export class Security {
  constructor(public router: Router) {
    console.log('Mining component initialized');
  }

  navigateTo(path: string) {
    console.log('Attempting to navigate to:', path);
    this.router.navigate([path]).then(success => {
      console.log('Navigation success:', success);
      if (!success) {
        console.error('Navigation failed to:', path);
      }
    });
  }
}
