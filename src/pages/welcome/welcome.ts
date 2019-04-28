import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LogInPage } from '../log-in/log-in';
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goLogin(){

    this.navCtrl.setRoot(LogInPage);

  }

}
