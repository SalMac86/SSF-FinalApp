import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Rules } from '../rules/rules';
import { Game } from '../game/game';
/**
 * Generated class for the Gamelobby page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gamelobby',
  templateUrl: 'gamelobby.html',
})
export class Gamelobby {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gamelobby');
  }
  
  playGame() {
    this.navCtrl.push(Game,{
      showHome: true
    })
  }
  goRules() {
    this.navCtrl.push(Rules,{
      showHome: true,
      fromRegister: true
    })
  }

}
