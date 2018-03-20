import {Component, EventEmitter, Output, Input} from '@angular/core';
import { HttpProvider } from '../../../providers/http/http';
import { HomePage } from '../../../pages/home/home';
import {AlertController, LoadingController, NavController} from 'ionic-angular';

/**
 * Generated class for the SearchTournamentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-tournaments',
  templateUrl: 'search-tournaments.html'
})
export class SearchTournamentsComponent {
  @Output() notifySearchTounaments: EventEmitter<number> = new EventEmitter<number>();

  tournaments;
  currentTournament;
  hiddenDivTournament: boolean = true;

  constructor(private http: HttpProvider, public navCtrl: NavController, public alertController: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello SearchTournamentsComponent Component');
    this.currentTournament = (localStorage['currentTournamentA'] !== undefined) ? JSON.parse(localStorage.getItem('currentTournamentA')) : null;
    this.tournaments = [];
    this.search();
  }

  search(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    console.log('---------------------- SearchTournament -----------------------');
    let urlGroupId = 'tournaments';
    this.http.async(urlGroupId).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res);
      this.tournaments = res;
      this.hiddenDivTournament = false;
      return res;
    }, (reason)=> {
      this.errorPopup(loading).present();
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }

  selectTournament(tournament){
    this.notifySearchTounaments.emit(tournament);
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
