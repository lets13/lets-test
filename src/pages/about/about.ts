import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { CategoryPage } from '../category/category';
import { GeneralistEducationPage } from '../generalist-education/generalist-education';
import { EPage } from '../e/e';
import { TotalPage } from '../total/total';
import { ProfilePage } from '../profile/profile';
import { SendQuestionerPage } from '../send-questioner/send-questioner';
import { SendingPagePage } from '../sending-page/sending-page';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  }
  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }goToCategory(params){
    if (!params) params = {};
    this.navCtrl.push(CategoryPage);
  }goToGeneralistEducation(params){
    if (!params) params = {};
    this.navCtrl.push(GeneralistEducationPage);
  }goToE(params){
    if (!params) params = {};
    this.navCtrl.push(EPage);
  }goToTotal(params){
    if (!params) params = {};
    this.navCtrl.push(TotalPage);
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
}
