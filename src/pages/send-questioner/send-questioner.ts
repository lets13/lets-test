import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendingPagePage } from '../sending-page/sending-page';
// import { MenuPage } from '../menu/menu';
import { CategoryPage } from '../category/category';
// import { GeneralistEducationPage } from '../generalist-education/generalist-education';
// import { EnglishPage } from '../english/english';
// import { EPage } from '../e/e';
// import { TotalPage } from '../total/total';
// import { ProfilePage } from '../profile/profile';
// import { AboutPage } from '../about/about';

@Component({
  selector: 'page-send-questioner',
  templateUrl: 'send-questioner.html'
})
export class SendQuestionerPage {

  constructor(public navCtrl: NavController) {
  }
  goToSendingPage(){
    this.navCtrl.push(SendingPagePage);
  }
  goToSendQuestioner(){
    this.navCtrl.push(SendQuestionerPage);
  }
  // goToMenu(){
  //   this.navCtrl.push(MenuPage);
  // }
  back(){
    this.navCtrl.push(CategoryPage);
  }
  // goToGeneralistEducation(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(GeneralistEducationPage);
  // }goToEnglish(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(EnglishPage);
  // }goToE(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(EPage);
  // }goToTotal(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(TotalPage);
  // }goToProfile(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(ProfilePage);
  // }goToAbout(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(AboutPage);
  // }
}
