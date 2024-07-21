import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AppComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  password: string | undefined;
  mobile: number | undefined;
  #fb = inject(FormBuilder);
  fieldTextType: boolean = false;

  //loginformdata 
  loginFormDetails = signal(this.#fb.group({
    mobile: ['', Validators.required],
    password: ['', Validators.required]
  }));

  //password show/hide
  toggleFieldType() {
    this.fieldTextType = !this.fieldTextType;
  }

  //login form submit
  userLoginDetails() {
    let userCredentials = localStorage.setItem('userDetails', JSON.stringify(this.loginFormDetails().value));
    let userData = localStorage.getItem('userDetails');
    if(userData){
      const userDetails =  JSON.parse(userData);
    }
    console.log(userData);
  }

}
