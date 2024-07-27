import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../../services/storage/storage.service';
import { Router } from '@angular/router';
import { userData } from '../../../services/users/users';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  #fb = inject(FormBuilder);
  #userService = inject(UsersService);
  #router = inject(Router);

  addUser = signal(this.#fb.group({
    userId:[''],
    userName: [''],
    userMobile: [''],
    userPassword: [''],
    userEmail: ['']
  }));

  userSubmit() {
    const userValue = this.addUser().value as userData
    this.#userService.saveData('userData', userValue);
    this.#router.navigate(['/user']);
  }
}
