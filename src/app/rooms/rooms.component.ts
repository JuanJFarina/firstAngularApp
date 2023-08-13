import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  name : string = "Juan";
  text : string = "I'm learning Angular !";
  cheers : string[] = [];
  possibleCheers: string[] = [
    "You rock ! ",
    "Keep going ! ",
    "You got this ! ",
    "You're the best ! ",
    "We love you ! "
  ]

  cheerMe() : void {
    this.cheers = [...this.cheers, this.possibleCheers[(Math.floor(Math.random() * this.possibleCheers.length))]];
  }

  logCheer(ch : number) {
    console.log(`This is our current amount of cheers: ${ch}`);
  }
}