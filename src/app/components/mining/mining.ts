import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mining',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './mining.html',
  styleUrls: ['./mining.css']
})
export class Mining {
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