import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { LoadingController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';

import {Http, Headers, RequestOptions}  from "@angular/http";

import 'rxjs/add/operator/map';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  items:any;
  
    country:any;
  
    capital:any;
  
  constructor(public navCtrl: NavController, private http: Http, public loading: LoadingController ) {
  }
  goToMenu(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }

  ionViewDidLoad(){
    
        
        this.getfeed();
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
        
        this.http.post('http://localhost/let/api/fetch_data.php',options)
        .map(res => res.json())
        .subscribe(res => {
        
         loader.dismiss()
        this.items=res.server_response;
        
        console.log(this.items);
        });
        });
      }
    
      ngOnInit(){   
        
         }
        
        E (){
          this.navCtrl.push(ProfilePage);
        }

        profile (){
          this.navCtrl.push(EditProfilePage);
        }
}
