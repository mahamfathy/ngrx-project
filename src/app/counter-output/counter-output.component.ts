import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent  {
  count$: Observable<number>;
  doubleCount$ :Observable<number>
  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
  }
 
}
