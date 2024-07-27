import { Injectable } from '@angular/core';
import { SalesData } from './new-sales';
import { AddCustomer } from '../add-customer/add-customer';

@Injectable({
  providedIn: 'root'
})
export class NewSalesService {

  constructor() { }
  //create
  saveData(salesData: string, value: SalesData) {
    const data = this.getData(salesData);
    if (data) {
      data.push(value);
      localStorage.setItem(salesData, JSON.stringify(data));
    } else {
      localStorage.setItem(salesData, JSON.stringify([value]));
    }

  }

  //get
  getData(key: string) {
    const custData = localStorage.getItem(key) || '';
    try {
      if (custData) {
        const data = JSON.parse(custData);
        return data || [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  //getonecust
  getOneCust(key: string, getOneId: number) {
    const data = this.getData(key);
    const custData = data.find((item: AddCustomer) => item.customerId === getOneId);
    return custData;
  }

  //update
  updateData(key: string, updatedItem: AddCustomer) {
    const data = this.getData(key);
    const index = data.findIndex((item: AddCustomer) => item.customerId === updatedItem.customerId);
    if (index !== -1) {
      data[index] = updatedItem;
      localStorage.setItem(key, JSON.stringify(data));
    }
  }
}
