import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mfe1';
  form = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  onSubmit() {
    console.log(this.form.value.email);
  }
}
