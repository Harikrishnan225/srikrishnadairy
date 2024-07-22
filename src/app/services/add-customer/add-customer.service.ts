import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AddCustomer } from './add-customer';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerService {

  private apiUrl = '';

  #http = inject(HttpClient);

  // getcustomer
  getNewCustomerDetails() {

  }

  // createnewcustomer
  createCustomerDetails(formData: AddCustomer) {
    this.#http.post<AddCustomer>('', formData)
  }

  // updatecustomer
  updateCustomerDetails() {

  }

  // deletecustomer
  deleteCustomerDetails() {

  }
}
