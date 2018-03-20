import {Component, EventEmitter, Output} from '@angular/core';
import {HttpProvider} from "../../../providers/http/http";
import { HomePage } from '../../../pages/home/home';
import {AlertController, LoadingController, NavController} from 'ionic-angular';


/**
 * Generated class for the SearchMatchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-match',
  templateUrl: 'search-match.html'
})
export class SearchMatchComponent {
  @Output() notifySearchMatch: EventEmitter<number> = new EventEmitter<number>();

  matchs;
  idTeam: number;
  currentMatch;
  hiddenDivMatch: boolean = true;

  constructor(private http: HttpProvider, public navCtrl: NavController, public alertController: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello SearchGroupComponent Component');
    this.currentMatch = (localStorage['currentMatchA'] !== undefined) ? JSON.parse(localStorage.getItem('currentMatchA')) : null;
    this.matchs =  [];
  }

  search(idTeam){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    if (idTeam !== undefined && idTeam !== null) this.idTeam = idTeam;
    else idTeam = this.idTeam;
    console.log('---------------------- SearchMatch -----------------------');
    console.log('idTeam : ', idTeam);
    let url = 'matchs/team/' + idTeam;
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res);
      this.matchs = res;
      this.hiddenDivMatch = false;
      return res;
    }, (reason)=> {
      this.errorPopup(loading).present();
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }

  selectMatch(match, numMatch){
    match["numMatch"] = numMatch;
    if(match.score !== undefined){
      this.popupSaveScore(match);
    }
    else{
      this.notifySearchMatch.emit(match);
    }
  }

  popupSaveScore(match){

    let confirmReset = this.alertController.create({
      title: 'Modification du score <br/> Equipe : ' + match.name,
      inputs:[
        {
          name: 'score',
          placeholder: 'Entrer le nouveau score',
          type: 'number'
        }
      ],
      cssClass: 'popupSave',
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
            console.log('data : ', data);
            this.saveScore(data);
          }
        }
      ]
    });
    confirmReset.present();
  }

  saveScore(score){
    console.log('score : ', score);
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
