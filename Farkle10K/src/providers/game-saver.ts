import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GameSaver provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GameSaver {

  constructor(public http: Http) {
    console.log('Hello GameSaver Provider');
  }
  
  // baseUrl: string = "https://sp-17-salvatore-jbrownssf.c9users.io/api/" //works at work
  baseUrl: string = "https://sp-17-salvatore-jbrownssf.c9users.io:8080/api/" //works most places
  path: string = "Games"
  
  saveGame(UserData){
    return this.http.post(
      this.baseUrl + this.path,
      UserData
      );
  }

}
