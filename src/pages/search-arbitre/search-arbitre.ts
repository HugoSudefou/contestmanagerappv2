import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public currentData: DataProvider) {
    this.currentData.setIsArbitre(true);
    let data = this.currentData.getData();
    localStorage.setItem('isArbitre', 'true');
    console.log('alldata  : ', data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchMatchPage');
  }

  selectTournament(tournament){
    this.currentData.setTournament(tournament);
    localStorage.setItem('currentTournamentA', JSON.stringify(tournament));
    this.hiddenTournament = true;
    this.hiddenGroup = false;
    this.searchGroup.search(tournament.id);
  }

  selectGroup(group){
    console.log(group.cycle)
    if(group.cycle === undefined || group.cycle === null) {
      if (group.name.match('CM1', 'CM2')) {
        group["cycle"] = 3;
      } else if (group.name.match('CP', 'CE1', 'CE1-CE2')) {
        group["cycle"] = 2;
      } else if (group.name.match('Collège', 'College', '6e', '5e', '4e', '3e', '2nd', '1er', 'Ter', 'Terminal')) {
        group["cycle"] = 3;
      } else {
        group["cycle"] = 2;
      }
    }
    this.currentData.setGroup(group);
    localStorage.setItem('currentGroupA', JSON.stringify(group));
    this.hiddenGroup = true;
    this.hiddenTeam = false;
    this.searchTeam.search(group.id);
  }

  selectTeam(team){
    this.currentData.setTeam(team);
    localStorage.setItem('currentTeamA', JSON.stringify(team));
    this.hiddenTeam = true;
    this.hiddenMatch = false;
    this.searchMatch.search(team.id);
  }

  selectMatch(match){
    console.log('match select : ', match)
    this.currentData.setMatch(match);
    localStorage.setItem('currentMatchA', JSON.stringify(match));
    let cycle = this.currentData.getGroup()["cycle"];
    this.hiddenMatch = true;
    this.hiddenTournament = false;
    let currentTeam = JSON.parse(localStorage.getItem('currentTeam'));
    if(cycle === 2) this.navCtrl.push('missionCycle2');
    else if(cycle === 3) this.navCtrl.push('missionCycle3');
    else this.navCtrl.push('NotFoundPage');
  }

}
