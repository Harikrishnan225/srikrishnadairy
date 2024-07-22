import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.scss'
})
export class CustomersListComponent implements OnInit {
  customerData = '';

  #storageService = inject(StorageService);

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    let data = this.#storageService.getData('customerData')
    console.log('data', data);
    
  }
}
