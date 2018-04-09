import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;

  possibleStatus = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.dontAllowTest]),
      'email': new FormControl(null, [Validators.required, Validators.email], [this.asyncDontAllowMail]),
      'status': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  dontAllowTest(control: FormControl) {
    if (control.value === 'Test') {
      return { nameIsTest: true };
    }

    return null;
  }

  asyncDontAllowMail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(
          () => {
            if (control.value === 'test@test.com') {
              resolve({ emailIsTest: true });
            } else {
              resolve(null);
            }
          }, 1500);
      });
    return promise;
  }

}
