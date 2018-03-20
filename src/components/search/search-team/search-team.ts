import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpProvider} from "../../../providers/http/http";
import {AlertController, LoadingController, NavController} from 'ionic-angular';

/**
 * Generated class for the SearchTeamComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-team',
  templateUrl: 'search-team.html'
})
export class SearchTeamComponent {
  @Output() notifySearchTeam: EventEmitter<number> = new EventEmitter<number>();

  teams: Array<{}>;
  idGroup: number;
  currentTeam;
  hiddenDivTeam: boolean = true;

  constructor(private http: HttpProvider, public navCtrl: NavController, public alertController: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello SearchGroupComponent Component');

    if(localStorage['isArbitre'] === 'true') this.currentTeam = (localStorage['currentTeamA'] !== undefined) ? JSON.parse(localStorage.getItem('currentTeamA')) : null;
    else this.currentTeam = (localStorage['currentTeamT'] !== undefined) ? JSON.parse(localStorage.getItem('currentTeamT')) : null;
    this.teams =  [{}];
  }

  search(idGroup){
    if (idGroup !== undefined && idGroup !== null) this.idGroup = idGroup;
    else idGroup = this.idGroup;
    console.log('---------------------- SearchGroup -----------------------');
    if(localStorage['isArbitre'] === 'true') {
      if (localStorage['idGroupOfTeamSelectedA'] !== undefined && JSON.parse(localStorage['idGroupOfTeamSelectedA']).id !== this.idGroup) this.currentTeam = null;
    }else {
      if (localStorage['idGroupOfTeamSelectedT'] !== undefined && JSON.parse(localStorage['idGroupOfTeamSelectedT']).id !== this.idGroup) this.currentTeam = null;
    }
    let url = 'groups/' + idGroup;
    // let url = 'groups/' + idGroup + '/match';
    console.log('url', url);
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res);
      this.teams = res[0]["team"];
      this.hiddenDivTeam = false;
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      this.errorPopup();
      return reason;
    });
  }

  selectTeam(team){
    console.log('team : ', team);
    if(localStorage['isArbitre'] === 'true') localStorage.setItem('idGroupOfTeamSelectedA', JSON.stringify({id: this.idGroup}));
    else localStorage.setItem('idGroupOfTeamSelectedT', JSON.stringify({id: this.idGroup}));

    this.notifySearchTeam.emit(team);
  }

  errorPopup(){
    console.log('errorPopup');
    let loading = this.loadingCtrl.create();
    return this.alertController.create({
      title: 'Une erreur est survenue vous allez être redirigé',
      cssClass: 'popupSave',
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          handler: data => {
            loading.dismissAll();
            this.navCtrl.push('HomePage');
          }
        }
      ]
    });
  }

}
