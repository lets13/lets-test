import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-generalist-education',
  templateUrl: 'generalist-education.html'
})
export class GeneralistEducationPage {

  constructor(public navCtrl: NavController) {
  }
  
}
