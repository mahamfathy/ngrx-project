import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent  {
  count$: Observable<number>;
  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }
 
}
