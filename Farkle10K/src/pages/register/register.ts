import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUsers } from '../../providers/app-users';

import { Rules } from '../rules/rules';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  user: any = {}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUsers: AppUsers) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }
  
  signupForm(form){
    console.log(form);
    if(form.invalid){
      return alert("Please fill in all required fields!");
    }
    this.appUsers.register(this.user)
      .map(res => res.json())
      .subscribe(res => {
        window.localStorage.setItem('token', res.token);
        window.localStorage.setItem('userId', res.id);
        this.navCtrl.setRoot(Rules, {
          showHome: true
        });
        //handle successful responses
        // console.log("hope this worked");
      }, 
      error => {
      switch(error.status) {
        case 404:
          alert("404: Page Not Found");
          break;
        case 422:
          alert("That e-mail is already in use.");
          break;
        case null:
          alert("User is offline.");
          break;
        case 500:
          alert("THE SKY IS FALLING!!!");
          break;
        default:
          console.log("nope, didn't work");
          break;
      }
    }) 

  }
  

}
