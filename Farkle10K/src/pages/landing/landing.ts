import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { Landaboutrules } from '../landaboutrules/landaboutrules';
/**
 * Generated class for the Landing page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class Landing {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Landing');
    localStorage.token = null;
    localStorage.userId = null;
  }

userLogin() {
    // console.log("this will go to Login");
    this.navCtrl.push(Login,{
      showHome: true
    });
  }
  
  goAbout() {
    // console.log("this will go to the About/Rules Landing Page");
    this.navCtrl.push(Landaboutrules, {
      showHome: true
    });
  }

}
