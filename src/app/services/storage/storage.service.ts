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

  //delete
  removeData(key: string) {
    localStorage.removeItem(key);
  }

}
