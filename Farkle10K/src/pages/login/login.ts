import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Gamelobby } from '../gamelobby/gamelobby';
import { Register } from '../register/register';
import { AppUsers } from '../../providers/app-users';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  user: any = {}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUsers: AppUsers
    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  logForm(form){
      console.log(form);
      if(form.invalid){
        return alert("Please fill in all required fields!");
      }
      this.appUsers.login(this.user)
        .map(res => res.json())
        .subscribe(res => {
          window.localStorage.setItem('token', res.id);
          window.localStorage.setItem('userId', res.userId);
          this.navCtrl.setRoot(Gamelobby);
          //handle successful responses
          // console.log("hope this worked");
        }, 
        error => {
        // switch(error.status) {
          // case 404:
          //   alert("404: Page Not Found");
          //   break;
          // case 422:
          //   alert("That e-mail is already in use.");
          //   break;
          // case null:
          //   alert("User is offline.");
          //   break;
          // case 500:
          //   alert("THE SKY IS FALLING!!!");
          //   break;
          // default:
            console.log("nope, didn't work cuz: "+error.status);
            // break;
        })
  
      //do stuff
      
    }
  
  registerUser(){
    this.navCtrl.push(Register, {
      showHome: false
    })
  }
}
