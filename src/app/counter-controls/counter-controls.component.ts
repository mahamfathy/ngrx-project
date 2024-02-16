import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.css'
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  
}
