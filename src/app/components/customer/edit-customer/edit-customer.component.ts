import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../../services/storage/storage.service';

@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.scss'
})
export class EditCustomerComponent {

  #fb = inject(FormBuilder);
  #storageService = inject(StorageService);
  editCustomer = signal(this.#fb.group({
    customerName: ['', Validators.required],
    customerMobile: ['', Validators.required],
    customerEmail: ['', Validators.required],
    milkPerLiter: [''],
    curdPerLiter: [''],
    customerDoorNo: [''],
    customerPlace: [''],
    customerDistrict: [''],
    customerPincode: ['']
  }));


  editCustomerSubmit() {

  }
}
