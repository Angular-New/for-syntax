import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IItem {
  title: string,
  description: string
}

class Item implements IItem {
  constructor(public title: string, public description: string) {
    //
  }
}

@Component({
  selector: 'f-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public readonly items: IItem[] = [
    new Item('title 1', 'description 1'),
    new Item('title 2', 'description 2'),
    new Item('title 3', 'description 3'),
  ];
}
