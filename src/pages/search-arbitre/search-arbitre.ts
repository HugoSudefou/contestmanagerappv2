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
    console.log('idMatch : ', idMatch);
  }

}
