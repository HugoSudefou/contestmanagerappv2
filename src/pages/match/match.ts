import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  showMatch: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider) {
    this.showMatch = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }


}
