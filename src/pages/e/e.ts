import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GeneralistEducationPage } from '../generalist-education/generalist-education';
import { CategoryPage } from '../category/category';
import { MenuPage } from '../menu/menu';
import { ProfilePage } from '../profile/profile';
import { SendQuestionerPage } from '../send-questioner/send-questioner';
import { SendingPagePage } from '../sending-page/sending-page';
import { AboutPage } from '../about/about';
import { TotalPage } from '../total/total';
import { LoadingController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import {Http, Headers, RequestOptions}  from "@angular/http";

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-e',
  templateUrl: 'e.html'
})
export class EPage {

  number: any;
  items: any;
  str: any;
  parts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: HttpClient, public loading: LoadingController ) {
    this.number = this.navParams.get('number');
    console.log(this.number);
    this.getsubject();
    alert("heyyy")
  }

  ionViewDidLoad(){
    this.getsubject();
  
      }
      
    getsubject(){
      alert("gege")
      this.http.get('http://localhost/let/api/getsubject.php')
      
       .subscribe(res => {
            console.log(res);

       });

    }
      getfeed(){
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });
           
         let loader = this.loading.create({
            content: 'Processing please wait...',
          });
        
         loader.present().then(() => {
        
        // this.http.post('http://localhost/let/api/display_q.php',options)
       
        // .subscribe(res => {
        
        //  loader.dismiss()
        // this.items=res.server_response; 
        // console.log(res)
        
        // //console.log();
        // this.str = this.items[0].gchoices;
        // this.parts = this.str.split(',');
        // console.log(this.parts[0]);
        // console.log(this.parts[1]);
        // console.log(this.parts[2]);
        // console.log(this.parts[3]);


        // });
        });
      }
    }
