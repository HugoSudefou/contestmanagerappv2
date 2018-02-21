import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {missionCycle2} from "../missionCycle2/missionCycle2";
import {missionCycle3} from "../missionCycle3/missionCycle3";

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
  cycle: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
    this.cycle = navParams.data;
    if(this.cycle === 2){
      this.dataScores = JSON.parse(localStorage["scores"]).cycle2.reverse();
      if(this.dataScores.length < 1) this.popup('scores');
      this.dataScores.forEach((value, key) => {
        if (key === 0) value.isActive = true;
      })
    }
    else if(this.cycle === 3){
      this.dataScores = JSON.parse(localStorage["scores"]).cycle3.reverse();
      if(this.dataScores.length < 1) this.popup('scores');
      this.dataScores.forEach((value, key) => {
        if (key === 0) value.isActive = true;
      })
    }
    else {
      this.popup('error');
    }
  }

  popup(type){
    let confirmReset = this.alertController.create({
      title: (type === 'error') ? 'Une erreur est survenu !' : 'Il n\'y a aucun score présent.',
      cssClass: 'popupSave',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            (this.cycle === 3) ? this.navCtrl.push('missionCycle3') : this.navCtrl.push('missionCycle2');
          }
        }
      ]
    });
    confirmReset.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoresPage');
  }

}
