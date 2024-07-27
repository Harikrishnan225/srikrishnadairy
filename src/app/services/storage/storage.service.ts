import { Injectable } from '@angular/core';
import { AddCustomer } from '../add-customer/add-customer';


const IDGenerator = {
  k: 'counter',
  getCurrentId() {
    return Number(localStorage.getItem(this.k)) || 0;
  },
  setCurrentId(x: number) {
    localStorage.setItem(this.k, String(x));
  },
  getNewId() {
    const newId = this.getCurrentId() + 1;
    this.setCurrentId(newId);
    return newId;
  },
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  //create
  saveData(key: string, value: AddCustomer) {
    const data = this.getData(key);
    value.customerId = IDGenerator.getNewId()
    if (data) {
      data.push(value);
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, JSON.stringify([value]));
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
  getOneCust(key: string, getOneId: any) {
    const data = this.getData(key);
    const custData = data.find((item: any) => item.customerId === getOneId);
    return custData;
  }

  //update
  updateData(key: string, updatedItem: any) {
    const data = this.getData(key);
    const index = data.findIndex((item: any) => item.customerId === updatedItem.customerId);
    if (index !== -1) {
      data[index] = updatedItem;
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  //delete
  removeData(key: string, id: number) {
   
  }


}
