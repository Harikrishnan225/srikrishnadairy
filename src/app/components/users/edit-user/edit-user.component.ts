import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {

  #fb = inject(FormBuilder);
  editUser = signal(this.#fb.group({
    userName: [''],
    userMobile: [''],
    userPassword: [''],
    userEmail: ['']
  }));

editUserSubmit(){
  
}
}
