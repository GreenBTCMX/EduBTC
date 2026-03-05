import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
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