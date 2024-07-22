import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  //create
  public saveData(customerData: string, value: string) {
    localStorage.setItem(customerData, value);
  }

  //get
  public getData(key: string) {
    return localStorage.getItem(key)
  }

  //delete
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

}
