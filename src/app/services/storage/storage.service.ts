import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  //create
  saveData(customerData: string, value: any) {
    const data = this.getData(customerData);
    if (data) {
      data.push(value);
      localStorage.setItem(customerData, JSON.stringify(data));
    } else {
      localStorage.setItem(customerData, JSON.stringify([value]));
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

  //delete
  removeData(key: string) {
    localStorage.removeItem(key);
  }

}
