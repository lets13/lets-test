import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import {HttpClientModule } from ''
import { MyApp } from './app.component';

import { PagePage } from '../pages/page/page';
import { LogInPage } from '../pages/log-in/log-in';
import { SignupPage } from '../pages/signup/signup';
import { MenuPage } from '../pages/menu/menu';
import { TryPage } from '../pages/try/try';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    MyApp,
    PagePage,
    LogInPage,
    SignupPage,
    MenuPage,
    ProfilePage,
    SendQuestionerPage,
    SendingPagePage,
    AboutPage,
    CategoryPage,
    GeneralistEducationPage,
    EPage,
    TotalPage,
    TryPage, 
    WelcomePage,
    EditProfilePage,
    ResultPage, 
  ],
  imports: [
    BrowserModule,NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
        "unitsFontSize": "20",
        "titleFontSize": "30",
        "subtitleFontSize": "20",

    }),
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule, RoundProgressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PagePage,
    LogInPage,
    SignupPage,
    MenuPage,
    ProfilePage,
    SendQuestionerPage,
    SendingPagePage,
    AboutPage,
    CategoryPage,
    GeneralistEducationPage,
    EPage,
    TotalPage,
    TryPage, 
    WelcomePage,
    EditProfilePage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}