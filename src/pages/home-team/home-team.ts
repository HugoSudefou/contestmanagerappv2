import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-team',
  templateUrl: 'home-team.html',
})
export class HomeTeamPage {
  idTeam: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idTeam = this.navParams.get('idTeam');
    console.log('idTeam : ', this.idTeam)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTeamPage');
  }

}
