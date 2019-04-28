import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TryPage } from '../try/try';

import {HttpClient, HttpHeaders}  from "@angular/common/http";
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  
  constructor(public navCtrl: NavController, private http:HttpClient, public alertCtrl: AlertController) {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Lock Page',
      subTitle: 'Sorry this pages is not yet available!',
      buttons: ['OK']
    });
    alert.present();
  }

  geEduc(){
    let data = {
      id: localStorage.getItem("id"),
      subject: "Generalist Education"
    }
    console.log(data)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      })
    }
    this.http.post<exam>("http://localhost/let/api/insertNewExam.php",data,httpOptions).subscribe((successData) => {
      localStorage.setItem("exam_id",successData.exam_id.toString())
    }, (error) => console.log(error));

  }
  goToTry(){
    let data ={
      date:new Date(),
       user_id:Number(JSON.parse(localStorage.getItem("server_response")).id),
    }
    console.log(data)
    this.http.post<exam>("http://localhost/let/api/insertNewExam.php",JSON.stringify(data)).subscribe((successData) => {
      localStorage.setItem("exam_id",successData.exam_id.toString())
      this.navCtrl.push(TryPage);
    }, (error) => console.log(error));

   
 
}
}
interface exam{
  exam_id:number
}