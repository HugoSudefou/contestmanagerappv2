import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { missionCycle2 } from '../missionCycle2/missionCycle2';
import { missionCycle3 } from '../missionCycle3/missionCycle3';
import { NotFoundPage } from '../not-found/not-found';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToC2(){
    this.navCtrl.push('missionCycle2')
  }

  goToC3(){
    this.navCtrl.push('missionCycle3')
  }

  goTo404(){
    this.navCtrl.push('NotFoundPage')
  }
}
