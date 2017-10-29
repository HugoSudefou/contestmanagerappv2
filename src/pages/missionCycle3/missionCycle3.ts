import { Component, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'FMCycle3',
  templateUrl: 'missionCycle3.html'
})
export class missionCycle3 implements OnChanges {
  scores: {
    penalities: number,
    mission1: number,
    mission2: number,
    mission3: number,
    mission4: number,
    mission5: number,
    mission6: number,
    bonus: number,
  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scores = {
      penalities: 0,
      mission1: 0,
      mission2: 0,
      mission3: 0,
      mission4: 0,
      mission5: 0,
      mission6: 0,
      bonus: 0,
    };
  }

  ngOnChanges(){
    console.log('test : ');
    console.log(this.scores);
  }

  goToHome(){
    this.navCtrl.push(HomePage)
  }

  nbrPenalties(penalities): void {
    this.scores.penalities = penalities;
  }

  scoreM1(scores: number): void {
    this.scores.mission1 = scores;
  }

  scoreM2(scores: number): void {
    this.scores.mission2 = scores;
  }

  scoreM3(scores: number): void {
    this.scores.mission2 = scores;
  }

}
