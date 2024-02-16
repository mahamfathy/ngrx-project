import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css'
})
export class CounterControlsComponent {
  constructor(private store: Store) {}
increment(){
  this.store.dispatch(increment({value:1}))
}
decrement(){
  this.store.dispatch(decrement({value:2}))
}
reset(){
  this.store.dispatch(reset())
}
  
}
