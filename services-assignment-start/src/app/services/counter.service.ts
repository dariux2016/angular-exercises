import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeToInactive : number = 0;
  inactiveToActive : number = 0;

  constructor() { }

  setToActiveEvent() {
    this.inactiveToActive++;
  }

  setToInactiveEvent() {
    this.activeToInactive++;
  }

}
