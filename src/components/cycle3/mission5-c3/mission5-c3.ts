import { Component, Output, EventEmitter  } from '@angular/core';

/**
 * Generated class for the Mission5C3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission5-c3',
  templateUrl: 'mission5-c3.html'
})
export class Mission5C3Component {
  @Output() notifyScorM5: EventEmitter<number> = new EventEmitter<number>();

  bool: boolean;
  scores: {choice1: number, choice2: number, total: number};
  listRadio1;
  listRadio2;

  constructor() {
    this.init();
  }

  init() {
    this.listRadio1 = -1;
    this.listRadio2 = -1;
    this.bool = false;
    this.scores = {
      choice1 : 0,
      choice2 : 0,
      total: 0
    };
  }

  calculScore(witchChoice: number, score){
    score = parseInt(score);
    if (witchChoice === 1) this.scores.choice1 = (this.listRadio1 === -1) ? 0 : score;
    else if (witchChoice === 2) this.scores.choice2 = (this.listRadio2 === -1) ? 0 : score;
    this.scores.total = this.scores.choice1 + this.scores.choice2
    if(this.scores.choice2 === 70 && this.scores.choice1 === 20) this.scores.total = 100
    if (witchChoice === 3 && !this.bool) this.scores.total = score
    this.pushScors();
  }

  pushScors(){
    if(this.bool) {
      this.notifyScorM5.emit(this.scores.total)
    }
    else{
      this.reset();
      this.notifyScorM5.emit(this.scores.total)
    }
  }

  reset(){
    this.init();
  }


}
