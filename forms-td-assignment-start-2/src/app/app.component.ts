import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro'];

  @ViewChild('myForm') myForm: NgForm;

  submittedForm: any;

  onSubmit() {
    console.log(this.myForm.value);
    this.submittedForm = this.myForm.value;
  }
}
