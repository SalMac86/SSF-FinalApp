import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { About } from '../about/about';
import { Rules } from '../rules/rules';

/**
 * Generated class for the Landaboutrules page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landaboutrules',
  templateUrl: 'landaboutrules.html',
})
export class Landaboutrules {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Landaboutrules');
  }
  
  goAbout(){
    this.navCtrl.push(About,{
      showHome: true
    })
  }
  
  goRules(){
    this.navCtrl.push(Rules,{
      showHome: true
    })
  }

}
