import {Component, EventEmitter, Output} from '@angular/core';
import {HttpProvider} from "../../../providers/http/http";
import { HomePage } from '../../../pages/home/home';
import {AlertController, LoadingController, NavController} from 'ionic-angular';

/**
 * Generated class for the SearchGroupByTournamentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-group-by-tournament',
  templateUrl: 'search-group-by-tournament.html'
})
export class SearchGroupByTournamentComponent {

  @Output() notifySearchGroup: EventEmitter<number> = new EventEmitter<number>();

  objectKeys = Object.keys;
  groups: {};
  currentGroup;
  idTournament: number;
  hiddenDivGroup: boolean = true;

  constructor(private http: HttpProvider, public navCtrl: NavController, public alertController: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello SearchGroupComponent Component');
    this.currentGroup = (localStorage['currentGroupA'] !== undefined) ? JSON.parse(localStorage.getItem('currentGroupA')) : null;
    this.groups = {};
  }

  search(idTournament){
    if (idTournament !== undefined && idTournament !== null) this.idTournament = idTournament;
    else idTournament = this.idTournament;
    console.log('---------------------- SearchGroupByTournament -----------------------');
    console.log('idTournamentClass : ', idTournament);
    let url = 'tournaments/groups/' + idTournament;
    console.log('idTournamentClass : ', 'tournaments/groups/' + idTournament);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res);
      this.groups = res;
      this.hiddenDivGroup = false;
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      this.errorPopup(loading).present();
      return reason;
    });
  }

  selectGroup(group){
    this.notifySearchGroup.emit(group);
  }

  errorPopup(loading){
    return this.alertController.create({
      title: 'Une erreur est survenue vous allez être redirigé',
      cssClass: 'popupSave',
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          handler: data => {
            this.navCtrl.push(HomePage, {loading: loading});
          }
        }
      ]
    });
  }

}
