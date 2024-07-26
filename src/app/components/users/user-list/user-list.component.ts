import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { userData } from '../../../services/users/users';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  #userService = inject(UsersService);
  userData = signal<userData[]>([]);
  ngOnInit(): void {
    this.userDeatails()
  }

  userDeatails() {
    const value = this.#userService.getData('userData');
    this.userData.set(value);
  }
}
