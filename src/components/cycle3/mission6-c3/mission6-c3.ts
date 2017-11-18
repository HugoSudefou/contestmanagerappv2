import { Component, Output, EventEmitter  } from '@angular/core';

/**
 * Generated class for the Mission6C3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission6-c3',
  templateUrl: 'mission6-c3.html'
})
export class Mission6C3Component {
  @Output() notifyScorM6: EventEmitter<number> = new EventEmitter<number>();

  bool: boolean;
  scores: {total: number};


  constructor() {
    this.init();
  }

  init() {
    this.bool = false;
    this.scores = {
      total: 0
    };
  }

  calculScore(score){
    console.log('this.bool : ', this.bool);
    score = parseInt(score)
    if (score === 80 && this.bool) score = score + 20;
    if (score === 100 && !this.bool) score = score - 20;
    this.scores.total = score
    this.pushScore()
  }

  pushScore(){
    this.notifyScorM6.emit(this.scores.total);
  }

  reset(){
    this.init();
  }
}
