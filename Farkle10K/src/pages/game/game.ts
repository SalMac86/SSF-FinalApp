import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Gamelobby } from '../gamelobby/gamelobby';
/**
 * Generated class for the Game page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class Game {
  showHome: boolean = false;
  die1: object = {};
  dice: any = [];
  scores: any = [];
  highScores: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dice = [
        {
          "value": 1,
          "selected": false
        },{
          "value": 2,
          "selected": false
        },{
          "value": 3,
          "selected": false
        },{
          "value": 4,
          "selected": false
        },{
          "value": 5,
          "selected": false
        },{
          "value": 6,
          "selected": false
        }
      ]; //array of objects {"value": 1-6, "selected": false}
    this.scores = [
        {
        'player': 0,
        'CPU': 0
        },{
        'player': 1000,
        'CPU': 2000
        },{
        'player': 5000,
        'CPU': 2000
        },{
        'player': 5500,
        'CPU': 3500
        },{
        'player': 7500,
        'CPU': 4200
        },{
        'player': 10000,
        'CPU': 6900
        }
      ];
      this.highScores = {
        'player': 10000,
        'CPU': 6900
      };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game');
      this.showHome = this.navParams.get("showHome");
      this.die1 = {"selected": false};
      this.scores[0]['player'] = 0;
      this.scores[0]['CPU'] = 0;
  }
 
  toGamelobby() {
    this.navCtrl.setRoot(Gamelobby, {
      showHome: false
    });
  }
  
  selectDie1(){
    this.die1['selected'] = !this.die1['selected'];
  }
  
  // rollDice(diceTray){
  //   //{
  //   //take in the dice tray array of die objects that are indexed and valued with a isSelected bool
  //   // diceTray[
  //   //   {
  //   //    //die One = diceTray[0] Two = diceTray[1] ..etc
  //   //   "value": 1-6,
  //   //   "selected": true false
  //   //   },{
  //   //   "value": 1-6,
  //   //   "selected": true false
  //   //   },{
  //   //   "value": 1-6,
  //   //   "selected": true false
  //   //   },{
  //   //   "value": 1-6,
  //   //   "selected": true false
  //   //   },{
  //   //   "value": 1-6,
  //   //   "selected": true false
  //   //   },{
  //   //   "value": 1-6,
  //   //   "selected": true false
  //   //   }
  //   // ]
  //   // }
  //   // go through the dice tray array, and randomly roll each UNselected die
  //   for (let i = 0;i < diceTray.length; i++){
  //     (!diceTray[i].selected){
  //       diceTray.value = rollD6();
  //     } 
  //   }
  // }
}
