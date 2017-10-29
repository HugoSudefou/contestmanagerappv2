import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'FMCycle2',
  templateUrl: 'missionCycle2.html'
})
export class missionCycle2 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad(){
    console.log('On charge bien la page Cycle 2');
  }

  goToHome(){
    this.navCtrl.push(HomePage)
  }

}
