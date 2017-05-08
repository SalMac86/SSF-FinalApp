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
  // die1: object = {}; //from prototyping / testing
  dice: any = [];
  scores: any = [];
  highScores: any;
  countingDice: array = [];
  runningTotal: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dice = [
        {
          "value": "F",
          "selected": false,
          "counted": false
        },{
          "value": "A",
          "selected": false,
          "counted": false
        },{
          "value": "R",
          "selected": false,
          "counted": false
        },{
          "value": "K",
          "selected": false,
          "counted": false
        },{
          "value": "L",
          "selected": false,
          "counted": false
        },{
          "value": "E",
          "selected": false,
          "counted": false
        } // index used to reference die position, value 1-6, selected for click, 
          // and counted for scoring and to prevent last round's selected dice from being toggled
      ]; //array of objects {"value": 1-6, "selected": false}
    //prepopulated with scores for view testing purposes
    //this array will eventually hold the turn by turn scores (should be saved when game state is saved)
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
      //this is so that the current score can be seen - might be a betterway, but it will
      //also align with the highscore leader board later on, so we'll see
      this.highScores = {
        'player': 10000,
        'CPU': 6900
      };
      this.countingDice = [
        {"ones": 0},
        {"twos": 0},
        {"threes": 0},
        {"fours": 0},
        {"fives": 0},
        {"sixes": 0}
      ]; //helps us score each set of dice - counts how many of each face value we're working with
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game');
      this.showHome = this.navParams.get("showHome");
      //temporary intialization of scores
      this.scores[0]['player'] = 0;
      this.scores[0]['CPU'] = 0;
  }
 
  toGamelobby() {
    this.navCtrl.setRoot(Gamelobby, {
      showHome: false
    });
  }
  
  // selectDie1(){
  //   this.die1['selected'] = !this.die1['selected'];
  // }
  //when a die is clicked from the page - this toggles the selection in the dice array
  selectDie(die){
    if(!this.dice[die]['counted'])
    this.dice[die]['selected'] = !this.dice[die]['selected'];
  }
  //this will roll new values for any Un-Selected Dice in the dice array
  rollEm(){
     for (let i = 0;i < this.dice.length; i++){
      if (!this.dice[i].selected){
        this.dice[i].value = this.rollD6();
      } 
    }
  }
  countEm(){
    //this will subtotal the selected dice from each re-roll
    //first, we iterate through all dice
    this.dice.forEach(die){
      //if a die is selected, and hasn't been counted
      if (die.selected && !die.counted){
        switch(die){
          //iterate the counter of countingDice
          case 1: this.countingDice['ones']++; break;
          case 2: this.countingDice['twos']++; break;
          case 3: this.countingDice['threes']++; break;
          case 4: this.countingDice['fours']++; break;
          case 5: this.countingDice['fives']++; break;
          case 6: this.countingDice['sixes']++; break;
        }
        //this way we don't accidentaly let people score triples off of dice rolled seperately
        this.dice[die]['counted'] = true;
      }
    };
  }
  bankIt(){
    //we need to score this game somehow
    //Okay, so on a very basic level take the values of the six dice - as an array?
    //then we can do a switch case on each die face value - so that singles, sets, etc get caught 
    //maybe cascade from 6 of a kind down ?
    
  }
  //return a value between 1 and 6
  rollD6(){
    return Math.floor(Math.random() * 6) + 1;
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
