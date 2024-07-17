import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginDetails } from '../../services/login/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginDetailsForm = signal<LoginDetails[]>([]);

}
