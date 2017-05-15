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
  
  // baseUrl: string = "https://sp-17-salvatore-jbrownssf.c9users.io:/api/" //works at work
  baseUrl: string = "https://sp-17-salvatore-jbrownssf.c9users.io:8080/api" //works most places
  gamePath: string = "/Games"
  // highPath: string = "/Highscores"
  
  saveGame(token, UserData){
    console.log("token = " + token + "\nUserData = " + JSON.stringify(UserData));
    return this.http.post(
      this.baseUrl + this.gamePath +
      "?access_token=" + token,
      UserData
      );
  }
  
  // getHighScores(token){
  //   return this.http.get(
  //     this.baseUrl + this.highPath +
  //     "?access_token=" + token
  //     );
  // }
  
  getUserScore(token, userId){
     return this.http.get(
      this.baseUrl + this.gamePath + 
        '?filter[userId]=' + userId +
        '&access_token=' + token
    );
  }
}
