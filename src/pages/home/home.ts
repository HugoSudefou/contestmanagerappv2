import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showCycle: boolean;
  txtBtnSwitch: String;
  choice: String;
  constructor(public navCtrl: NavController, public currentData: DataProvider) {
    localStorage.setItem('isArbitre', 'false');
    this.currentData.setIsArbitre(false);
    this.showCycle = false;
    this.txtBtnSwitch = (this.showCycle) ? 'Feuille de mission' : 'Tournois';
    this.choice = (this.showCycle) ? 'votre profil' : 'le cycle';
  }

  goToPage(page){
    this.navCtrl.push(page);
  }

  switchBtn(){
    this.showCycle = !this.showCycle;
    this.txtBtnSwitch = (this.showCycle) ? 'Feuille de mission' : 'Tournois';
    this.choice = (this.showCycle) ? 'votre profil' : 'le cycle';
  }
}
