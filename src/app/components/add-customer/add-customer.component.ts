import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddNewCustomer } from '../../services/add-customer/add-customer';
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
    customerMobile: ['', Validators.required, Validators.maxLength(10)],
    customerEmail: ['', Validators.required, Validators.email],
    milkPerLiter: [''],
    curdPerLiter: [''],
    customerDoorNo: [''],
    customerPlace: [''],
    customerDistrict: [''],
    customerPincode: ['']
  }));

  //formsubmit
  addNewCustomerSubmit() {
    const formValue = this.addNewCustomer().value as AddNewCustomer;
    if (formValue) {
      this.#storageService.saveData('customerData', JSON.stringify(formValue));
      this.#router.navigate(['/customers']);
      this.addNewCustomer().reset();
    }
  }
}
