import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html',
})
export class ScoresPage {

  dataScores: Array<any>;
  Object = Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataScores = JSON.parse(localStorage["scores"]).reverse();
    this.dataScores.forEach((value, key) => {
      if (key === 0) value.isActive = true;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresPage');
  }

}
