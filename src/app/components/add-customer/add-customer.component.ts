import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddCustomer } from '../../services/add-customer/add-customer';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent {

  #fb = inject(FormBuilder);
  #storageService = inject(StorageService);
  #router = inject(Router);

  //form data
  addNewCustomer = signal(this.#fb.group({
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

  //formsubmit
  addNewCustomerSubmit() {
    const formValue = this.addNewCustomer().value as AddCustomer;
    if (formValue) {
      this.#storageService.saveData('customerData', formValue);
      this.#router.navigate(['/customers']);
      this.addNewCustomer().reset();
    }
  }
}
