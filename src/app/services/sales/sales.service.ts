import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

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
    const sales = localStorage.getItem(key) || '';
    try {
      if (sales) {
        const data = JSON.parse(sales);
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
    const sales = data.find((item: any) => item.customerId === getOneId);
    return sales;
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

}
