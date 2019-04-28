import { Component, ViewChild  } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { CategoryPage } from '../category/category';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({

  selector: 'page-log-in',
  templateUrl: 'log-in.html'

})

export class LogInPage {
// info:any;
// info2:any;
  @ViewChild("username") username;
  @ViewChild("password") password;

  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    private http: Http, public loading: LoadingController) {
      // const data = JSON.parse(localStorage.getItem('server_response'));
      // this.info = data.server_response;

  }

  signup(){

    this.navCtrl.push(SignupPage);

  }

  login(){

  //// check to confirm the username and password fields are filled

  if(this.username.value=="" ){

    let alert = this.alertCtrl.create({

    title:"ATTENTION",

    subTitle:"Username field is empty",

    buttons: ['OK']

    });

    alert.present();

  } else if(this.password.value==""){

    let alert = this.alertCtrl.create({

    title:"ATTENTION",

    subTitle:"Password field is empty",

    buttons: ['OK']

    });

    alert.present();

  } else {

    var headers = new Headers();

    headers.append("Accept", 'application/json');

    headers.append('Content-Type', 'application/json' );

    let options = new RequestOptions({ headers: headers });

    let data = {

    username: this.username.value,

    password: this.password.value

    };

    let loader = this.loading.create({

    content: 'Processing please wait…',

    });

    loader.present().then(() => {

    this.http.post('http://localhost/let/api/login.php',data,options)

    .map(res => res.json())

    .subscribe(res => {

    // console.log(this.info2.username);  

    loader.dismiss()

    localStorage.setItem('server_response', JSON.stringify(res));
    const data = JSON.parse(localStorage.getItem('server_response'));
    // this.info2 = data.server_response;


    if(res=="Your Login Email or Password is invalid"){

      let alert = this.alertCtrl.create({
        
              title:"ERROR",
        
              subTitle:"Your Login Username or Password is invalid",
        
              buttons: ['OK']
        
              });
        
              alert.present();
    }else {

      console.log(res)
      localStorage.setItem("id",res.id)

      let alert = this.alertCtrl.create({
        
                title:"CONGRATS",
        
                subTitle:"login success",
        
                buttons: ['OK']
        
              });
        
              alert.present();
        
              this.navCtrl.setRoot(CategoryPage);
   

    }

  });

  });

  }

  }

}