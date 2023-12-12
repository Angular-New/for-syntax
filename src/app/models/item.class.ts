import { IItem } from '../types';

export class Item implements IItem {
  constructor(public title: string, public description: string) {
    //
  }
}
