import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit, OnDestroy{
  counter = 0;
  counterServiceSub?: Subscription;

  constructor(private counterService: CounterService) {}
  ngOnInit(): void {
    this.counterServiceSub = this.counterService.counterChanged.subscribe(
      (newVal) => (this.counter = newVal)
    );
}
ngOnDestroy(): void {
  if (this.counterServiceSub) {
    this.counterServiceSub.unsubscribe();
  }
}
}
