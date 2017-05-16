import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameSaver } from '../../providers/game-saver';
import { AppUsers } from '../../providers/app-users';
/**
 * Generated class for the Leaderboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class Leaderboard {
  highScores: any;
  userHighScore: any;
  token: any;
  userId: any;
  gameUsers: any;
  gameUserNames: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public gameSaver: GameSaver,
    public appUsers: AppUsers) {
      // console.log(this.userHighScore);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Leaderboard');
    this.token = window.localStorage.getItem('token');
    this.userId = window.localStorage.getItem('userId');
    this.highScores = this.gameSaver.getUserScore(this.token, this.userId).
      map(response=>response.json()).
      subscribe(result=>{
        // console.log(result);
        this.userHighScore = result;
        console.log("inside the userHighScore subscribe");
        // console.log(this.gameUserNames);
        console.log(this.userHighScore);
        // this.userHighScore.forEach(score=> score.userId = this.appUsers.getUserName(this.userId));
          this.gameUsers = this.appUsers.getUserNames().
            map(res=>res.json()).
            subscribe(result=>{
            this.gameUserNames = result;
            console.log("inside the gameUsers subscribe");
            console.log(this.gameUserNames);
            // console.log(this.userHighScore);
            this.matchUserNames();
            this.personalBest();
          });
      });
    // console.log(this.userHighScore);
    // console.log(this.highScores)
   
      // this.matchUserNames();
    // console.log('this.gameUserNames[0].username ' + this.gameUserNames[0]['username']);
    // console.log('this.userHighScore[0].id ' + this.userHighScore[0]['id']);
    
  }
  // highScores = this.userHighScore;
  // this.highScores = this.gameSaver.getHighScores(this.token);
  matchUserNames(){
    console.log("inside matchUserNames start " + this.gameUserNames);
    console.log(this.userHighScore);
    for(let score of this.userHighScore){
      this.appUsers.getUserName(score.userId).
        map(res=>res.json()).
        subscribe(result => {
          console.log("matchUserNames subscribe");
          score.userName = result[0].username;
          console.log(result);
        });
    }
    console.log("inside matchUserNames finish"); 
    console.log(this.gameUserNames);
    console.log(this.userHighScore);
  }
  
  personalBest(){
    console.log("inside Personal Best");
    console.log(this.userHighScore);
  }
  
}
