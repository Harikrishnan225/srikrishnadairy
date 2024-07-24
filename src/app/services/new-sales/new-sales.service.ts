import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewSalesService {

  constructor() { }
  //create
  saveCustomerData(customerData: string, value: any) {
    const data = this.getCustomerData(customerData);
    if (data) {
      data.push(value);
      localStorage.setItem(customerData, JSON.stringify(data));
    } else {
      localStorage.setItem(customerData, JSON.stringify([value]));
    }

  }

  //get
  getCustomerData(key: string) {
    const custData = localStorage.getItem(key) || '';
    try {
      if (custData) {
        const data = JSON.parse(custData);
        console.log('service', data);

        return data || [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  //delete
  removeCustomerData(key: string) {
    localStorage.removeItem(key);
  }}
