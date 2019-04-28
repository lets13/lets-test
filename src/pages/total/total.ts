import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@Component({
  selector: 'page-total',
  templateUrl: 'total.html'
})
export class TotalPage {

  score: any;
  items: number;
  percent: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.score = navParams.get("totalscore");
    this.items = navParams.get("items");

    this.percent = (this.score/this.items) * 100;
    console.log(this.percent);

  }
  
}
