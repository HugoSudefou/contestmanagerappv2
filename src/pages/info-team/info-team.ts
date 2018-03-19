import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {HomeTeamPage} from "../home-team/home-team";

/**
 * Generated class for the InfoTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-team',
  templateUrl: 'info-team.html',
})
export class InfoTeamPage {
  idTeam;
  team;
  showProfil;
  objectKeys = Object.keys;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider, public loadingCtrl: LoadingController) {
    this.showProfil = false;
    if(this.navParams.get('idTeam') === null || this.navParams.get('idTeam') === undefined) this.navCtrl.push('HomeTeamPage');
    else{
      console.log('ds');
      this.idTeam = this.navParams.get('idTeam');
      this.search(this.idTeam);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoTeamPage');
  }

  search(idTeam){
    if (idTeam !== undefined && idTeam !== null) this.idTeam = idTeam;
    else idTeam = this.idTeam;
    console.log('---------------------- SearchGroupInfoTeam-----------------------');
    let url = 'teams/' + idTeam;
    // let url = 'groups/' + idGroup + '/match';
    console.log('url', url);
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res);
      this.team = res;
      console.log('this.team', this.team);

      this.showProfil = true;
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }
}
