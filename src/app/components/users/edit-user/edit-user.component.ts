import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit {

  #fb = inject(FormBuilder);
  #route = inject(ActivatedRoute);
  #userService = inject(UsersService);
  #router = inject(Router);
  userId: string | undefined;

  editUser = signal(this.#fb.group({
    userId: [''],
    userName: [''],
    userMobile: [''],
    userPassword: [''],
    userEmail: ['']
  }));

  ngOnInit(): void {
    this.userId = this.#route.snapshot.params['id'];    
    this.getUserData();
  }

  getUserData() {
    const data = this.#userService.getOneCust('userData', this.userId);    
    this.editUser().patchValue(data);
  }

  editUserSubmit() {
    const editFormData = this.editUser().value;
    this.#userService.updateData('userData', editFormData);
    this.#router.navigate(['/user']);
  }
}
