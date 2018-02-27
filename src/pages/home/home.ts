import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showCycle: boolean;
  txtBtnSwitch: String;
  choice: String;
  constructor(public navCtrl: NavController) {
    localStorage.setItem('isArbitre', 'false');
    this.showCycle = true;
    this.txtBtnSwitch = 'Feuille de mission';
    this.choice = 'votre profil';
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
