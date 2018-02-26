import {Component, EventEmitter, Output} from '@angular/core';
import { AlertController } from 'ionic-angular';
import {HttpProvider} from "../../../providers/http/http";


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

  matchs: Array<{}>;
  hiddenDivMatch: boolean = true;

  constructor(private http: HttpProvider, public alertController: AlertController) {
    console.log('Hello SearchGroupComponent Component');
    this.matchs =  [{}];
  }

  search(idTeam){
    console.log('---------------------- SearchMatch -----------------------');
    console.log('idTeam : ', idTeam);
    let url = 'matchs/team/' + idTeam;
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res.json());
      this.matchs = res.json();
      this.hiddenDivMatch = false;
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }

  selectMatch(match){
    console.log('match : ', match);
    if(match.score !== undefined){
      this.popupSaveScore(match);
    }
    else{
      this.notifySearchMatch.emit(match.id);
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

}
