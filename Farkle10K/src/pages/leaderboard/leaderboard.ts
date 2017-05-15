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
        console.log(this.userHighScore);
        // this.userHighScore.forEach(score=> score.userId = this.appUsers.getUserName(this.userId));
      });
    // console.log(this.userHighScore);
    // console.log(this.highScores)
  }
  // highScores = this.userHighScore;
  // this.highScores = this.gameSaver.getHighScores(this.token);
  
  
}
