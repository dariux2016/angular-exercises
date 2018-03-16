import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  @ViewChild('myForm') myForm: NgForm;
  defaultSubscription = 'Advanced';
  valore: MyFormClass;

  onSubmit(){
    console.log(this.myForm);
    this.valore = this.myForm.form.value;

    this.myForm.reset();
  }
}

export interface MyFormClass{
  mail: string;
  password: string;
  subscription : string;
}