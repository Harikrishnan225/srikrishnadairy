import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddCustomer } from '../../../services/add-customer/add-customer';
import { StorageService } from '../../../services/storage/storage.service';

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
  customerData = signal<AddCustomer[]>([]);

  #storageService = inject(StorageService);

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    const dataCust = this.#storageService.getData('customerData');
    this.customerData.set(dataCust);
  }

  deleteCustomer(custId: number) {
    this.#storageService.removeData('customerData', custId)
  }
}
