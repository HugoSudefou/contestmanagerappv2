import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the Mission1C3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission1-c3',
  templateUrl: 'mission1-c3.html'
})
export class Mission1C3Component {
  @Output() notifyScorM1: EventEmitter<number> = new EventEmitter<number>();

  boolM1: boolean;
  colorBoolM1: string;
  scores: {bool: number, choice: number, total: number};
  choice: number;
  listRadio;

  constructor() {
    this.init();
  }

  init() {
    this.listRadio = -1;
    this.boolM1 = false;
    this.colorBoolM1 = 'red';
    this.scores = {
      bool : 0,
      choice : 0,
      total: 0
    };
  }

  upBoolM1(){
    this.boolM1 = !this.boolM1;
    this.colorBoolM1 = (this.boolM1) ? 'green' : 'red';
    (this.boolM1) ? this.scores.bool = 20 : this.scores.bool = 0;
    this.pushScors();
  }

  upRodioM1(score){
    this.scores.choice = parseInt(score);
    this.pushScors();
  }

  pushScors(){
    const choice = (this.scores.choice === -1) ? 0 : this.scores.choice;
    this.scores.total = this.scores.bool + choice;
    (this.boolM1) ? this.notifyScorM1.emit(this.scores.total) : this.notifyScorM1.emit(this.scores.total);
  }

  reset(){
    this.init();
  }
}
