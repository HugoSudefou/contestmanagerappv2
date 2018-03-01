import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ScoresPage } from '../scores/scores';
import { TimerC3Component } from '../../components/cycle3/timer/timer';
import {HttpProvider} from "../../providers/http/http";
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'FMCycle3',
  templateUrl: 'missionCycle3.html'
})
export class missionCycle3 {

  @ViewChild(TimerC3Component) timer: TimerC3Component;
  isArbitre;

  scores: {
    penalities: number,
    mission1: number,
    mission2: number,
    mission3: number,
    mission4: number,
    mission5: number,
    mission6: number,
    bonusTec: number,
    bonusPeda: number,
    total: number,
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, private http: HttpProvider, public currentData: DataProvider) {
    this.init();

    if(this.currentData.getIsArbitre() === undefined) this.isArbitre = JSON.parse(localStorage["isArbitre"]);
    else this.isArbitre = this.currentData.getIsArbitre();
  }

  init(){
    this.scores = {
      penalities: 0,
      mission1: 0,
      mission2: 0,
      mission3: 0,
      mission4: 0,
      mission5: 0,
      mission6: 0,
      bonusTec: 0,
      bonusPeda: 0,
      total: 0
    };
  }

  goToHome(){
    this.navCtrl.push(HomePage);
    this.timer.initTimer();
  }

  goToScore(){
    this.navCtrl.push('ScoresPage', 3)
    this.timer.initTimer();
  }

  score(scores: number, mission: string): void {
    this.scores[mission] = scores;
    this.scores.total = this.scores.mission1 + this.scores.mission2 + this.scores.mission3 + this.scores.mission4 + this.scores.mission5 + this.scores.mission6 + this.scores.bonusPeda + this.scores.bonusTec - (this.scores.penalities * 10);
  }

  reset(){
    let confirmReset = this.alertController.create({
      title: 'Êtes-vous sur de vouloir reset le feuille de  mission ?',
      cssClass: 'popupSave',
      buttons: [
        {
          text: 'OUI',
          handler: () => {
            this.init();
            document.getElementById('reset').click();
            this.timer.initTimer();
          }
        },
        {
          text: 'NON',
          handler: () => {

          }
        }
      ]
    });
    confirmReset.present();
  }

  popupCancel(){
    return this.alertController.create({
      title: 'Le score n\'a pas été enregistré',
      cssClass: 'popupSave',
      message: 'Il manque le nom de l\'équipe ',
      buttons: ['OK']
    });
  }

  popupFinishSave(time, total, team){
    return this.alertController.create({
      title: 'Le score a bien été enregistré',
      cssClass: 'popupSave',
      message: 'Équipe : ' + team + '<br/> Score : ' + total + '<br/> Temps : ' + time,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.goToScore();
          }
        }
      ]
    });
  }

  popupConfirmScore(time, total, team, match, isArbitre){
    let title;
    let inputs;
    let subTitle;
    let message;
    let buttons;
    console.log('match : ', match)
    if(isArbitre){
      title = 'Êtes vous sur de vouloir enregistrer ce score ?';
      subTitle = 'Equipe : ' + team.name + '<br/> Match ' + match.numMatch ;
      message = 'Score total : ' + total + '<br/> Temps : ' + time;
      buttons = [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Envoyer',
          handler: () => {

            let url = 'matchs/team/score';
            let body = {
              id_team : team.id,
              id_match : match.id,
              score : total
            };
            this.http.asyncPost(url, body).subscribe((res)=>{
              // The return value gets picked up by the then in the controller.
              console.log('API', res.json());
              return res;
            }, (reason)=> {
              console.log('ERREUR API : ', reason);
              return reason;
            });

            // if (false) {
            //   let allData: any = {
            //     scores: this.scores,
            //     team: team,
            //     timer: time,
            //     isActive: false
            //   }
            //   this.localSaveScore(allData);
            //   this.popupFinishSave(time, total, team).present();
            // }
          }
        }
      ];
    }
    else{
      title = 'Êtes-vous sur de vouloir enregistrer ce score ?';
      inputs = [{
        name: 'team',
        placeholder: 'Nom de l\'équipe'
      }];
      message = 'Score total : ' + total + '<br/> Temps : ' + time;
      buttons = [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enregistrer',
          handler: data => {
            if (data.team) {
              let saveScore = this.alertController.create({
                title: 'Le score a bien été enregistré',
                cssClass: 'popupSave',
                message: 'Équipe : ' + data.team + '<br/> Score : ' + total + '<br/> Temps : ' + time,
                buttons: [
                  {
                    text: 'OK',
                    handler: () => {
                      //this.goToScore();
                    }
                  }
                ]
              });

              let allData: any = {
                scores: this.scores,
                team: data.team,
                timer: time,
                isActive: false
              }
              //this.localSaveScore(allData);
              //saveScore.present();
            } else {
              this.popupCancel().present();
            }
          }
        }
      ];
    }
    return this.alertController.create({
      title: title,
      subTitle: subTitle,
      cssClass: 'popupSave',
      inputs: inputs,
      message: message,
      buttons: buttons
    });
  }

  saveScore(){
    let team = null;
    let match = null;
    if(this.isArbitre) {
      team = (this.currentData.getTeam()["id"] === undefined) ? JSON.parse(localStorage['currentTeamA']) : this.currentData.getTeam();
      match = (this.currentData.getMatch()["id"] === undefined) ? JSON.parse(localStorage['currentMatchA']) : this.currentData.getMatch();
    }
    this.timer.pauseTimer();
    let time = this.timer.timer.displayTime;
    const total = this.scores.total;

    this.popupConfirmScore(time, total, team, match, this.isArbitre).present();
  }

  localSaveScore(allData){
    let scores = JSON.parse(localStorage["scores"]);
    scores.cycle3.push(allData);
    localStorage.setItem('scores', JSON.stringify(scores));
  }
}
