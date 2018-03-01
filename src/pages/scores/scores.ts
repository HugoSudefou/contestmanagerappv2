import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as _ from 'lodash'
import {DataProvider} from "../../providers/data/data";
import {SearchMatchPage} from "../search-arbitre/search-arbitre";
import {HttpProvider} from "../../providers/http/http";

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
  fromHomeTeam;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, private http: HttpProvider, public currentData: DataProvider) {
    this.cycle = navParams.data;
    this.fromHomeTeam = this.currentData.getFromHomeTeam();
    console.log('fromHomeTeam : ', this.fromHomeTeam)
    if(this.fromHomeTeam){
      this.search(this.currentData.getTeam().id);
    }
    else{
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
  }

  search(idTeam){
    console.log('---------------------- SearchScore -----------------------');
    console.log('idTeam : ', idTeam);
    let url = 'matchs/team/' + idTeam;
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res);
      _.forEach(()=>{

      })
      // this.matchs = res;
      // this.hiddenDivMatch = false;
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }

  popup(type){
    let confirmReset = this.alertController.create({
      title: (type === 'error') ? 'Une erreur est survenu !' : 'Il n\'y a aucun score présent.',
      cssClass: 'popupSave',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if(this.fromHomeTeam) {
              this.navCtrl.push('SearchMatchPage');
            } else{
              this.navCtrl.push('missionCycle' + this.cycle);
            }
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
