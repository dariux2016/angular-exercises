import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  projectForm: FormGroup;
  statusValues = ['Stable', 'Critical', 'Finished'];

  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectName' : new FormControl(null, [Validators.required], this.asyncProjectNameValidator),
      'mail' : new FormControl(null, [Validators.required, Validators.email]),
      'status' : new FormControl("", [Validators.required])
    });

   /* this.projectForm.get('projectName').valueChanges
      .subscribe(
        (control: FormControl) => {
          this.asyncProjectNameValidator(control);
        }
      );*/
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  customProjectNameValidator(control: FormControl) : {[s: string] : boolean} {
    if(control.value === 'Test'){
      return {'invalidProjectName' : true};
    }

    return null;
  }
  
  asyncProjectNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
