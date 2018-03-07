import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  incrementingNumber : number = 0;
  intervalRef : any;
  
  @Output() 
  incrementingEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.intervalRef = setInterval(() => {
      console.log('chiamato incremento');
      this.incrementingNumber++;
      this.incrementingEvent.emit(this.incrementingNumber);
    }, 200);
  }

  onGameStop() {
    clearInterval(this.intervalRef);
  }

}
