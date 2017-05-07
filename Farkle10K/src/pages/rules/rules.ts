import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Game } from '../game/game';
import { Register } from '../register/register';

/**
 * Generated class for the Rules page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rules',
  templateUrl: 'rules.html',
})
export class Rules {
  userId: any = window.localStorage.getItem("userId");
  showHome: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rules');
    this.showHome = this.navParams.get("showHome");
  }
  
  toLobby() {
    if(this.userId){ //super sketchy check to see if user is logged on
      this.navCtrl.push(Game);
    }
    this.navCtrl.setRoot(Register);
  }

}
