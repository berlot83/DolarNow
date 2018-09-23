import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DolarNowProvider } from '../../providers/dolar-now/dolar-now'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public redditService: DolarNowProvider) {

  }
/*
  ionViewDidLoad(){
  	this.redditService.getRemoteData();
  }
*/
}
