import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../../../services/storage/storage.service';
import { userData } from '../../../services/users/users';

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
  #storageService = inject(StorageService);
  userData = signal<userData[]>([]);
  ngOnInit(): void {
    this.userDeatails()
  }

  userDeatails() {
    const value = this.#storageService.getData('userData');
    this.userData.set(value);
  }
}
