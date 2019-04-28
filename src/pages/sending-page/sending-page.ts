import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SendQuestionerPage } from '../send-questioner/send-questioner';
import { Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-sending-page',
  templateUrl: 'sending-page.html'
})
export class SendingPagePage {

  @ViewChild("gquestion") gquestion;
  
  @ViewChild("gchoices") gchoices;

  @ViewChild("ganswer") ganswer;

  @ViewChild("gexplanation") gexplanation;

  

  @ViewChild("gdatesubmitted") gdatesubmitted;

  @ViewChild("gstatus") gstatus;

  @ViewChild("greason") greason;

  @ViewChild("greference") greference;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,  private http: Http,  public loading: LoadingController) {
    }
  goToSendQuestioner(){
    this.navCtrl.push(SendQuestionerPage);
  }
//   goToSendingPage(params){
//     if (!params) params = {};
//     this.navCtrl.push(SendingPagePage);
//   }
  Createpost(){
    
    //// check to confirm the username, email, telephone and password fields are filled

    
    if(this.gquestion.value==""){
    
        let alert = this.alertCtrl.create({
        
        title:"ATTENTION",
        
        subTitle:"Question field is empty",
        
        buttons: ['OK']
    
    });
    
    alert.present();
    
    }
    
    else
    
    if(this.gchoices.value=="" ){
    
        let alert = this.alertCtrl.create({
        
        title:"ATTENTION",
        
        subTitle:"Choice field is empty",
        
        buttons: ['OK']
    
    });
    
    alert.present();
    
    } else
    
    if(this.ganswer.value==""){
    
        let alert = this.alertCtrl.create({
        
        title:"ATTENTION",
        
        subTitle:"Answer field is empty",
        
        buttons: ['OK']
    
    });
    
    alert.present();
    
    }
    
    else
    
    if(this.gexplanation.value==""){
      
          let alert = this.alertCtrl.create({
          
          title:"ATTENTION",
          
          subTitle:"Explanation field is empty",
          
          buttons: ['OK']
      
      });
      
      alert.present();
      
      }
      
        
        else

        if(this.gstatus.value==""){
          
              let alert = this.alertCtrl.create({
              
              title:"ATTENTION",
              
              subTitle:"Status field is empty",
              
              buttons: ['OK']
          
          });
          
          alert.present();
          
          }
          
          else
      
      if(this.greason.value==""){
        
            let alert = this.alertCtrl.create({
            
            title:"ATTENTION",
            
            subTitle:"Reason field is empty",
            
            buttons: ['OK']
        
        });
        
        alert.present();
        
        }
        
        else

        if(this.greference.value==""){
          
              let alert = this.alertCtrl.create({
              
              title:"ATTENTION",
              
              subTitle:"Reference field is empty",
              
              buttons: ['OK']
              
          });
          
          alert.present();
          
          }
          
          else
      
    {
    
    var headers = new Headers();
    
    headers.append("Accept", 'application/json');
    
    headers.append('Content-Type', 'application/json' );
    
    let options = new RequestOptions({ headers: headers });
    
    let data = {
    
    
    gquestion: this.gquestion.value,
    
    gchoices: this.gchoices.value,
    
    ganswer: this.ganswer.value,

    gexplanation: this.gexplanation.value,

    gstatus: this.gstatus.value,

    greason: this.greason.value,

    greference: this.greference.value
    
    };
    
    let loader = this.loading.create({
    
    content: 'Processing please wait…',
    
    });
    
    loader.present().then(() => {
    
    this.http.post('http://localhost/let/api/createpost.php',data, options)
    
    .map(res => res.json())
    
    .subscribe(res => {
    
    loader.dismiss()
    
    if(res=="Submit successfull"){
    
    let alert = this.alertCtrl.create({
    
    title:"CONGRATS",
    
    subTitle:(res),
    
    buttons: ['OK']
    
    });
    
    alert.present();
    
    this.navCtrl.setRoot(SendingPagePage);
    
    }
    else
    
    {
    
    let alert = this.alertCtrl.create({
    
    title:"ERROR",
    
    subTitle:(res),
    
    buttons: ['OK']
    
    });
    
    alert.present();
    
    }
    
    });
    
    });
    
    }
    
    }
    
    }

