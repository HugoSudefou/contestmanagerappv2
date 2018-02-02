import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TimerC2Component } from '../../components/cycle2/timer/timer';
import { ScoresPage } from '../scores/scores';

@IonicPage()
@Component({
  selector: 'FMCycle2',
  templateUrl: 'missionCycle2.html'
})
export class missionCycle2 {
  @ViewChild(TimerC2Component) timer: TimerC2Component;

  scores: {
    penalities: number,
    mission1: number,
    mission2: number,
    mission3: number,
    mission4: number,
    mission5: number,
    mission6: number,
    bonus: number,
    total: number,
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController) {
    this.scores = {
      penalities: 0,
      mission1: 0,
      mission2: 0,
      mission3: 0,
      mission4: 0,
      mission5: 0,
      mission6: 0,
      bonus: 0,
      total: 0
    };
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
      bonus: 0,
      total: 0
    };
  }

  goToHome(){
    this.navCtrl.push(HomePage);
    this.timer.initTimer();
  }
  goToScore(){
    this.navCtrl.push('ScoresPage', 2)
    this.timer.initTimer();
  }

  score(scores: number, mission: string): void {
    this.scores[mission] = scores;
    this.scores.total = (this.scores.mission1 + this.scores.mission2 + this.scores.mission3 + this.scores.mission4 + this.scores.mission5 + this.scores.mission6 + this.scores.bonus) - this.scores.penalities;
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

  saveScore(){
    this.timer.pauseTimer();
    let time = this.timer.timer.displayTime;
    const total = this.scores.total;
    let cancelSaveScore = this.alertController.create({
      title: 'Le score n\'a pas été enregistré',
      cssClass: 'popupSave',
      message: 'Il manque le nom de l\'équipe ',
      buttons: ['OK']
    });
    let confirmScore = this.alertController.create({
      title: 'Êtes-vous sur de vouloir enregistrer ce score ?',
      cssClass: 'popupSave',
      inputs: [
        {
          name: 'team',
          placeholder: 'Nom de l\'équipe'
        }
      ],
      message: 'Score total : ' + total + '<br/> Temps : ' + time,
      buttons: [
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
                      this.goToScore();
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
              this.localSaveScore(allData);
              saveScore.present();
            } else {
              cancelSaveScore.present();
            }
          }
        }
      ]
    });
    confirmScore.present();
  }

  localSaveScore(allData){
    let scores = JSON.parse(localStorage["scores"]);
    scores.cycle2.push(allData);
    localStorage.setItem('scores', JSON.stringify(scores));
  }
}
