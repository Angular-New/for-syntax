import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'f-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'for-syntax';
}