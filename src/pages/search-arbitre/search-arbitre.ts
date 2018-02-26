import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-match',
  templateUrl: 'search-arbitre.html',
})
export class SearchMatchPage {
  @ViewChild('group') searchGroup;
  @ViewChild('team') searchTeam;
  @ViewChild('match') searchMatch;

  hiddenTournament: boolean = false;
  hiddenGroup: boolean = true;
  hiddenTeam: boolean = true;
  hiddenMatch: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchMatchPage');
  }

  selectTournament(idTournament){
    this.hiddenTournament = true;
    this.hiddenGroup = false;
    this.searchGroup.search(idTournament);
  }

  selectGroup(idGroup){
    console.log('idGroup SearchMatchPage : ', idGroup);
    this.hiddenGroup = true;
    this.hiddenTeam = false;
    this.searchTeam.search(idGroup);
  }

  selectTeam(idTeam){
    this.hiddenTeam = true;
    this.hiddenMatch = false;
    this.searchMatch.search(idTeam);
  }

  selectMatch(idMatch){
    this.hiddenMatch = true;
    let cycle = 3;
    let currentTeam = JSON.parse(localStorage.getItem('currentTeam'));
    if(cycle === 2) this.navCtrl.push('missionCycle2');
    else if(cycle === 3) this.navCtrl.push('missionCycle3');
    else this.navCtrl.push('NotFoundPage');
    console.log('currentTeam : ', currentTeam);
    console.log('idMatch : ', idMatch);
  }

}
