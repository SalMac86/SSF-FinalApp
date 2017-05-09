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
  countingDice: any;
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
      this.countingDice = { //made it an object instead of array of objects
        "ones": 0,
        "twos": 0,
        "threes": 0,
        "fours": 0,
        "fives": 0,
        "sixes": 0
        }; //helps us score each set of dice - counts how many of each face value we're working with
      // this.countingDice = [
      //   {"ones": 0},
      //   {"twos": 0},
      //   {"threes": 0},
      //   {"fours": 0},
      //   {"fives": 0},
      //   {"sixes": 0}
      // ]; //helps us score each set of dice - counts how many of each face value we're working with
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
  selectDie(dieIndex){
    if(!this.dice[dieIndex]['counted'])
    this.dice[dieIndex]['selected'] = !this.dice[dieIndex]['selected'];
  }
  //this will roll new values for any Un-Selected Dice in the dice array
  rollEm(){
    console.log(this.dice)
    // first go through the dice and roll any that aren't selected.
    for (let i = 0; i < this.dice.length; i++){
      if (!this.dice[i].selected){
        this.dice[i].value = this.rollD6();
      }
    }
    //now we'll count any selected dice
    this.countEm()
    
  }
  countEm(){
    console.log(this.dice);
    console.log(this.countingDice);
    //this will subtotal the selected dice from each re-roll
    //first, we iterate through all dice
    this.dice.forEach((die, index)=>{ //thanks John => "fat arrow" instead of function to fix scope
      //if a die is selected, and hasn't been counted
      if (die.selected && !die.counted){
        switch(die.value){
          //iterate the counter of countingDice
          case 1: this.countingDice['ones']++; break;
          case 2: this.countingDice['twos']++; break;
          case 3: this.countingDice['threes']++; break;
          case 4: this.countingDice['fours']++; break;
          case 5: this.countingDice['fives']++; break;
          case 6: this.countingDice['sixes']++; break;
        }
        //this way we don't accidentaly let people score triples off of dice rolled seperately
        this.dice[index]['counted'] = true;
      }
    })
    //now that they're counted, we'll get a subtotal for the user
    this.scoreEm(); //this will update the runningTotal.
  }
  scoreEm(){
    //takes the countingDice array, and get a score
    for (let [faceValue, count] of this.countingDice){
      switch(faceValue){
        case 'ones': switch(count){
          case 6: this.runningTotal += 1000;
          case 5: this.runningTotal += 1000;
          case 4: this.runningTotal += 1000;
          case 3: this.runningTotal += 800;
          case 2: this.runningTotal += 100;
          case 1: this.runningTotal += 100;
          default: this.runningTotal += 0;
        }; 
        case 'fives': switch(count){
          case 6: this.runningTotal += 500;
          case 5: this.runningTotal += 500;
          case 4: this.runningTotal += 500;
          case 3: this.runningTotal += 350;
          case 2: this.runningTotal += 100;
          case 1: this.runningTotal += 50;
          default: this.runningTotal += 0; break;
        };
        case 'sixes': switch(count){
          case 6: this.runningTotal += 600;
          case 5: this.runningTotal += 600;
          case 4: this.runningTotal += 600;
          case 3: this.runningTotal += 600;
          case 2: this.runningTotal += 0;
          case 1: this.runningTotal += 0;
          default: this.runningTotal += 0; break
        };
        case 'fours': switch(count){
          case 6: this.runningTotal += 400;
          case 5: this.runningTotal += 400;
          case 4: this.runningTotal += 400;
          case 3: this.runningTotal += 400;
          case 2: this.runningTotal += 0;
          case 1: this.runningTotal += 0;
          default: this.runningTotal += 0; break
        };
        case 'threes': switch(count){
          case 6: this.runningTotal += 300;
          case 5: this.runningTotal += 300;
          case 4: this.runningTotal += 300;
          case 3: this.runningTotal += 300;
          case 2: this.runningTotal += 0;
          case 1: this.runningTotal += 0;
          default: this.runningTotal += 0; break
        };
        case 'twos': switch(count){
          case 6: this.runningTotal += 200;
          case 5: this.runningTotal += 200;
          case 4: this.runningTotal += 200;
          case 3: this.runningTotal += 200;
          case 2: this.runningTotal += 0;
          case 1: this.runningTotal += 0;
          default: this.runningTotal += 0; break
        };
      };
    }
  }
  bankIt(){
    //we need to score this game somehow =>scoreEm()
    //Okay, so on a very basic level take the values of the six dice - as an array?
    //then we can do a switch case on each die face value - so that singles, sets, etc get caught 
    //maybe cascade from 6 of a kind down ?
    
    //now that we have a score, and we haven't farkled, 
    
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
