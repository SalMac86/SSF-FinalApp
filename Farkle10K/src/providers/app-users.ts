import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUsers {

  constructor(public http: Http) {
    console.log('Hello AppUsers Provider');
  }
  
  baseUrl: string = "https://sp-17-salvatore-jbrownssf.c9users.io:/api/" //works at work
  // baseUrl: string = "https://sp-17-salvatore-jbrownssf.c9users.io:8080/api/" //works most places
  path: string = "farkleUsers"
  
  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
      )
  }
   login(userData) {
    return this.http.post(
      this.baseUrl + this.path + "/login",
      userData
      )
  }
  getUserNames(){
    // return 
    // let userName = '';
    return this.http.get(
      this.baseUrl + this.path 
      // +
      // '?filter[where][id]=' + userId
      );
      // ).map(res=>res.json()).subscribe(result=> userName = result.username);
      // return userName;
  }
  getUserName(userId){
    // return 
    // let userName = '';
    return this.http.get(
      this.baseUrl + this.path +
      '?filter[where][id]=' + userId
      );
      // ).map(res=>res.json()).subscribe(result=> userName = result.username);
      // return userName;
  }
}
