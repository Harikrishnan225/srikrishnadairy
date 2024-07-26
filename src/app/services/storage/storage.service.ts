import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  //create
  saveData(Data: string, value: any) {
    const data = this.getData(Data);
    if (data) {
      data.push(value);
      localStorage.setItem(Data, JSON.stringify(data));
    } else {
      localStorage.setItem(Data, JSON.stringify([value]));
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
  removeData(key: string) {
    localStorage.removeItem(key);
  }

}
