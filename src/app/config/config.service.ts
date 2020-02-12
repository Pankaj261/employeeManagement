import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userUrls } from './url';

@Injectable()
export class fetchingData {
  
  constructor(private http: HttpClient) { }

  private data:any;

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData(){
    this.data = undefined;
  }
  
  getUserData(){
    return this.http.get(userUrls.getUserDataUrl);
  }

  updateUser(id, data){
    return this.http.put(userUrls.updateUserUrl+'/'+id, data);
  }

  createUser(data){
    return this.http.post(userUrls.createUserUrl, data);
  }

  deleteUser(id){
    return this.http.delete(userUrls.deleteUserUrl+'/'+id);
  }
  
}