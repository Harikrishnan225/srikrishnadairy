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
  const userData = localStorage.getItem(key) || '';
  try {
    if (userData) {
      const data = JSON.parse(userData);
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
  const userData = data.find((item: any) => item.userId === getOneId);
  return userData;
}

//update
updateData(key: string, updatedItem: any) {
  const data = this.getData(key);
  const index = data.findIndex((item: any) => item.userId === updatedItem.userId);
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
