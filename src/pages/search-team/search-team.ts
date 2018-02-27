import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the SearchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-team',
  templateUrl: 'search-team.html'
})
export class SearchTeamPage {
  @ViewChild('group') searchGroup;
  @ViewChild('team') searchTeam;
  @ViewChild('match') searchMatch;

  hiddenGroup: boolean = false;
  hiddenTeam: boolean = true;
  hiddenMatch: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public currentData: DataProvider) {
    let data = this.currentData.getData();
    localStorage.setItem('isArbitre', 'false  ');
    console.log('allData : ', data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchTeamPage');
  }

  selectGroup(group){
    this.currentData.setGroup(group);
    localStorage.setItem('currentGroupT', JSON.stringify(group));
    this.hiddenGroup = true;
    this.hiddenTeam = false;
    this.searchTeam.search(group.id);
  }

  selectTeam(team){
    this.currentData.setTeam(team);
    localStorage.setItem('currentTeamT', JSON.stringify(team));
    this.hiddenTeam = true;
    this.hiddenGroup = false;
    this.navCtrl.push('HomeTeamPage'  , {idTeam: team.id})
  }


}
