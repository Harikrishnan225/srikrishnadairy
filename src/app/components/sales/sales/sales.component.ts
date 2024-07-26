import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../../../services/storage/storage.service';
import { AddCustomer } from '../../../services/add-customer/add-customer';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit {

  #storageService = inject(StorageService);
  selectedCustomer = signal<AddCustomer[]>([]);

  ngOnInit(): void {
    this.selectCustomer();
  }

  selectCustomer() {
    const valCust = this.#storageService.getData('customerData');
    this.selectedCustomer.set(valCust);
  }
}
