import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { missionCycle2 } from '../missionCycle2/missionCycle2';
import { missionCycle3 } from '../missionCycle3/missionCycle3';
import { SearchMatchPage } from '../search-arbitre/search-arbitre';
import { SearchTeamPage } from '../search-team/search-team';
import { NotFoundPage } from '../not-found/not-found';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showCycle: boolean;
  txtBtnSwitch: String;
  choice: String;
  constructor(public navCtrl: NavController) {
    this.showCycle = true;
    this.txtBtnSwitch = 'Feuille de mission';
    this.choice = 'votre profil';
  }

  goToPage(page){
    this.navCtrl.push(page)
  }

  switchBtn(){
    this.showCycle = !this.showCycle;
    this.txtBtnSwitch = (this.showCycle) ? 'Feuille de mission' : 'Tournois';
    this.choice = (this.showCycle) ? 'votre profil' : 'le cycle';
  }
}
