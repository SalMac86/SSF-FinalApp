import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Gamelobby } from '../gamelobby/gamelobby';
import { Register } from '../register/register';
import { Landing } from '../landing/landing';

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
  userId: string;
  showHome: boolean = false;
  fromRegister: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rules');
    this.showHome = this.navParams.get("showHome");
    this.fromRegister = this.navParams.get("fromRegister");
  }
  toLanding() {
    this.navCtrl.setRoot(Landing);
  }
  toGamelobby() {
    if(this.fromRegister){
    this.navCtrl.push(Gamelobby);
    }else{
    this.toRegister();
    }
  }
  toRegister() {
    this.navCtrl.setRoot(Register);
  }

}
