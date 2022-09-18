import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnChanges{

  @Input() label: string = ''
  counter: number = 0

  constructor() { }

  increment() {
    this.counter++
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ' + JSON.stringify(changes))
  }


}
