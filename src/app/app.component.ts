import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PagePage } from '../pages/page/page';
import { LogInPage } from '../pages/log-in/log-in';
import { SignupPage } from '../pages/signup/signup';
import { TryPage } from '../pages/try/try';
import { MenuPage } from '../pages/menu/menu';
import { ProfilePage } from '../pages/profile/profile'; 
import { SendQuestionerPage } from '../pages/send-questioner/send-questioner';
import { SendingPagePage } from '../pages/sending-page/sending-page';
import { AboutPage } from '../pages/about/about';
import { CategoryPage } from '../pages/category/category';
import { GeneralistEducationPage } from '../pages/generalist-education/generalist-education';
import { EPage } from '../pages/e/e';
import { TotalPage } from '../pages/total/total';
import { WelcomePage } from '../pages/welcome/welcome';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ResultPage } from '../pages/result/result';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = ResultPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  Profile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProfilePage);
  }About(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutPage);
  }Category(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CategoryPage);
  }SendQuestioner(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SendQuestionerPage);
  }
  Logout(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LogInPage);
  }
  mapage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TryPage);
  }
} 