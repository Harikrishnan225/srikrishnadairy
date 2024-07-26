import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../../services/storage/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.scss'
})
export class EditCustomerComponent implements OnInit {

  #fb = inject(FormBuilder);
  #storageService = inject(StorageService);
  #activatedRoute = inject(ActivatedRoute);
  #router = inject(Router)
  custId: unknown | undefined;

  ngOnInit(): void {
    this.custId = this.#activatedRoute.snapshot.params['id'];
    this.getOneCustomer();
  }

  editCustomer = signal(this.#fb.group({
    customerId: [''],
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

  getOneCustomer() {
    const data = this.#storageService.getOneCust('customerData', this.custId);
    this.editCustomer().patchValue(data);
  }


  editCustomerSubmit() {
    const editFormValue = this.editCustomer().value;
    this.#storageService.updateData('customerData', editFormValue);
    this.#router.navigate(['/customers']);
  }
}
