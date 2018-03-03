import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	toggleDetails : boolean = false;
	buttonText : string = 'Display details';
	logArray : number[] = [];
	clickNumber : number = 0;

	onToggleDetails(){
		this.toggleDetails = !this.toggleDetails;
		if(this.toggleDetails){
			this.buttonText = 'Hide details';
		} else {
			this.buttonText = 'Display details';
		}

		this.clickNumber++;
		this.logArray.push(this.clickNumber);
	}
}
