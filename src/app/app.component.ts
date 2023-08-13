import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firstAngularApp';
  today = new Date();

  @ViewChild('bye', { static: true }) bye! : ElementRef;

  ngOnInit() {
    this.bye.nativeElement.innerText = "Chau, Madafaca ! (generado por ElementRef)";
  }
}