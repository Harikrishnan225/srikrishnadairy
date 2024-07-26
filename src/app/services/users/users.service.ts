import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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

//getonecust
getOneCust(key: string, getOneId: any) {
  const data = this.getData(key);
  const custData = data.find((item: any) => item.userIdId === getOneId);
  return custData;
}

//update
updateData(key: string, updatedItem: any) {
  const data = this.getData(key);
  const index = data.findIndex((item: any) => item.userIdId === updatedItem.userIdId);
  if (index !== -1) {
    data[index] = updatedItem;
    localStorage.setItem(key, JSON.stringify(data));
  }
}

//delete
removeData(key: string, id: number) {
  const data = localStorage.getItem(key);

  if (data) {
    let dataValue: any[] = JSON.parse(data);
    if (Array.isArray(dataValue)) {
      let removedData = dataValue.filter(item => item.id !== id);
      localStorage.setItem(key, JSON.stringify(removedData));
    } else {
      console.error('Data is notfound');
    }
  }
}

}
