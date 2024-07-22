import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AddNewCustomer } from './add-customer';

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
  createCustomerDetails(formData: AddNewCustomer) {
    this.#http.post<AddNewCustomer>('', formData)
  }

  // updatecustomer
  updateCustomerDetails() {

  }

  // deletecustomer
  deleteCustomerDetails() {

  }
}
