import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddElements : number[] = [];
  evenElements : number[] = [];

  onIncrementing(data){
    console.log(data);
    if(data % 2 === 0){
      this.evenElements.push(data);
    } else {
      this.oddElements.push(data);
    }
  }
}
