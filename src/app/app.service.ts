import { Injectable } from '@angular/core';
import { IItem } from './types';
import { Observable, of } from 'rxjs';
import { Item } from './models';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public generateItems(): Observable<IItem[]> {
    const items: IItem[] = [
      new Item('title 1', 'description 1'),
      new Item('title 2', 'description 2'),
      new Item('title 3', 'description 3'),
    ];

    return of(items);
  }

  public generateMap(): Observable<Map<string, string>> {
    const mapItems: Map<string, string> = new Map([
      ['uno', 'first'],
      ['duo', 'second'],
    ]);

    return of(mapItems);
  }
}
