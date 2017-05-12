import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameSaver } from '../../providers/game-saver';

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
    public gameSaver: GameSaver) {
      this.token = window.localStorage.getItem('token');
      this.userId = window.localStorage.getItem('userId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Leaderboard');
  }
  
  this.highScores = this.gameSaver.getHighScores(this.token);
  this.userHighScore = this.gameSaver.getUserScore(this.token, this.userId);
  
}
