import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	toggleDetails = false : boolean;
	buttonText = 'Display details' : string;
	logArray = {} : number[];
	clickNumber = 0 : number;

	onToggleDetails(){
		this.toggleDetails = !this.toggleDetails;
		if(this.toggleDetails){
			this.buttonText = 'Hide details';
		} else {
			this.buttonText = 'Display details';
		}

		this.clickNumber++;
		logArray.push(this.clickNumber);
	}
}
