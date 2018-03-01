import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {DataProvider} from "../../providers/data/data";
import * as _ from 'lodash';

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
  // show: boolean;
  matchsFinish: Array<{}> = [];
  matchsNotFinish: Array<{}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider, public currentData: DataProvider) {
    this.showMatch = true;
    // this.show = false;
    this.search();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }

  goToPage(page, idTeam = null){
    (idTeam === null) ? this.navCtrl.push(page) : this.navCtrl.push(page, idTeam);
  }

  search(){
    console.log('---------------------- SearchMatchOfTeam -----------------------');
    let idTeam = this.currentData.getTeam()["id"] || JSON.parse(localStorage['currentTeamT']).id;
    let url = 'matchs/team/' + idTeam;
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res);
      this.showMatch = false;
      let allMatch = res;
      _.forEach(allMatch, (match, key)=>{
        match["show"] = false;
        (match.score === undefined) ? this.matchsNotFinish.push(match) : this.matchsFinish.push(match);
      });
      console.log('this.matchsNotFinish', this.matchsNotFinish);
      console.log('this.matchs  Finish', this.matchsFinish);
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }
}
