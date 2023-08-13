import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cheers-counter',
  templateUrl: './cheers-counter.component.html',
  styleUrls: ['./cheers-counter.component.css']
})

export class CheersCounterComponent {

  @Input() cheers! : number;

  @Output() newCheer = new EventEmitter<number>();

  algoAsi = setInterval(() => {
    this.newCheer.emit(this.cheers);
  }, 1000);

}
