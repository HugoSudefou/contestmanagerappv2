import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {HttpProvider} from "../../providers/http/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showCycle: boolean;
  txtBtnSwitch: String;
  choice: String;
  constructor(public navCtrl: NavController, public currentData: DataProvider, public alertController: AlertController, public loadingCtrl: LoadingController, private http: HttpProvider) {
    localStorage.setItem('isArbitre', 'false');
    this.currentData.setIsArbitre(false);
    this.showCycle = false;
    this.txtBtnSwitch = (this.showCycle) ? 'Feuille de mission' : 'Tournois';
    this.choice = (this.showCycle) ? 'votre profil' : 'le cycle';
  }

  goToPage(page){
    if(page === 'SearchMatchPage'){
      this.loginArbiter();
    }
    else {
      this.navCtrl.push(page);
    }
  }

  loginArbiter(){
    this.popupLogin().present();
  }

  popupLogin(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    if(!this.currentData.getIsArbitre()) {
      return this.alertController.create({
        title: 'Veuillez entrer le mot de passe',
        cssClass: 'popupSave',
        inputs: [{
          name: 'password',
          placeholder: 'Mot de passe',
          type: 'password'
        }],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Connecter',
            handler: data => {
              loading.present();
              console.log('data : ', data);
              if (data.password) {
                console.log('data.password : ', data.password);
                const params = {
                  username : 'arbiter',
                  password : data.password
                }
                this.http.login(data.password).subscribe((res)=>{
                  loading.dismiss();
                  console.log('res.header : ', res.headers);
                  // The return value gets picked up by the then in the controller.
                  console.log('API ', res.body );
                  this.currentData.setToken(res['token']);
                  this.navCtrl.push('SearchMatchPage');
                  return res;
                }, (reason)=> {
                  loading.dismiss();
                  this.popupCancel().present();
                  console.log('ERREUR API : ', reason);
                  return reason;
                });
              } else {
                this.popupCancel().present();
              }
            }
          }
        ]
      });
    }
    else {
      this.navCtrl.push('SearchMatchPage');
    }
  }

  popupCancel(){
    return this.alertController.create({
      title: 'Le mot de passe est incorecte',
      cssClass: 'popupSave',
      buttons: ['OK']
    });
  }

  switchBtn(){
    this.showCycle = !this.showCycle;
    this.txtBtnSwitch = (this.showCycle) ? 'Feuille de mission' : 'Tournois';
    this.choice = (this.showCycle) ? 'votre profil' : 'le cycle';
  }
}
