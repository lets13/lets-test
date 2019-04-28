import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { ProfilePage } from '../profile/profile';
import { SendQuestionerPage } from '../send-questioner/send-questioner';
import { SendingPagePage } from '../sending-page/sending-page';
import { AboutPage } from '../about/about';
import { LogInPage } from '../log-in/log-in';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {
  }
  goToCategory(params){
    if (!params) params = {};
    this.navCtrl.push(CategoryPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }goToSendQuestioner(params){
    if (!params) params = {};
    this.navCtrl.push(SendQuestionerPage);
  }goToSendingPage(params){
    if (!params) params = {};
    this.navCtrl.push(SendingPagePage);
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.push(AboutPage);
  }
  LogoutPage(){
    this.navCtrl.push(LogInPage);
  }
}
