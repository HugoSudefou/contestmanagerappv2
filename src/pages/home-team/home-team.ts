import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {HomePage} from "../home/home";
import {SearchTeamPage} from "../search-team/search-team";

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
  team: {};
  group: {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public currentData: DataProvider, public alertController: AlertController) {
    console.log('--------------Construc HomeTeam ------------------');
    this.currentData.setFromHomeTeam(true);
    if(this.currentData.getTeam().id === undefined && localStorage['currentTeamT'] === undefined) this.popupError();
    else this.team = (this.currentData.getTeam().id === undefined) ? JSON.parse(localStorage['currentTeamT']) : this.currentData.getTeam();
    if(this.currentData.getGroup().id === undefined && localStorage['currentGroupT'] === undefined) this.popupError();
    else this.group = (this.currentData.getGroup().id === undefined) ? JSON.parse(localStorage['currentGroupT']) : this.currentData.getGroup();
    if(this.team['id'] === null && this.group['id'] === null) this.navCtrl.push('SearchTeamPage');
    console.log('team : ', this.team)
    console.log('group : ', this.group)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTeamPage');
    console.log('team : ', this.team)
  }

  goToPage(page: any, needCycle: boolean){
    if(page === 'ScoreGroupPage'){
      console.log('page : ', page);
      console.log('this.group["id"] : ', this.group["id"])
      this.navCtrl.push(page, {idGroup : this.group["id"]});
    }
    else if(page === 'InfoTeamPage'){
      console.log('page : ', page);
      console.log('this.group["id"] : ', this.team["id"])
      this.navCtrl.push(page, {idTeam : this.team["id"]});
    }
    else{
      if(needCycle){
        page = page + this.group["cycle"];
      }
      console.log('page : ', page)
      this.navCtrl.push(page);
    }
  }

  popupError(){
    let confirmReset = this.alertController.create({
      title: 'Un problème a été rencontré',
      message: 'Vous allez être redirgé vers la Page d\'accueil',
      cssClass: 'popupSave',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            //this.navCtrl.push(HomePage);
          }
        }
      ]
    });
    confirmReset.present();
  }

}
