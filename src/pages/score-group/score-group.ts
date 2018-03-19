import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import * as _ from 'lodash'
/**
 * Generated class for the ScoreGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-group',
  templateUrl: 'score-group.html',
})
export class ScoreGroupPage {
  idGroup;
  teams;
  showScore;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider, public loadingCtrl: LoadingController) {
    this.showScore = false;
    this.idGroup = this.navParams.get('idGroup');
    this.search(this.idGroup);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreGroupPage');
  }

  search(idGroup){
    if (idGroup !== undefined && idGroup !== null) this.idGroup = idGroup;
    else idGroup = this.idGroup;
    console.log('---------------------- SearchGroupScoreGroupe -----------------------');
    let url = 'groups/' + idGroup;
    // let url = 'groups/' + idGroup + '/match';
    console.log('url', url);
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res[0]);
      this.teams = res[0].team;
      _.filter(this.teams, 'best_score');
      this.showScore = true;
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }
}
