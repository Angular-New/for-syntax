import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItem } from './types';
import { ItemComponent } from './components/item/item.component';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { NotFoundComponent } from './components/not-found/not-found.component';

@Component({
  selector: 'f-root',
  standalone: true,
  imports: [CommonModule, ItemComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly appService: AppService = inject(AppService);
  public readonly items$: Observable<IItem[]> = this.appService.generateItems();

  // writing our own tracking function, if we really need to
  // but in most cases, the shorthand notation - track item.title - will be enough
  public trackItem = (_: number, item: IItem): string => item.title;
}
