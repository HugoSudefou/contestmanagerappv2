import {Component, EventEmitter, Output} from '@angular/core';

/**
 * Generated class for the Mission5C2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission5-c2',
  templateUrl: 'mission5-c2.html'
})
export class Mission5C2Component {

  @Output() notifyScorM5: EventEmitter<number> = new EventEmitter<number>();

  bool: {
    bool1: boolean,
    bool2: boolean
  }

  scores: {
    bool1: number,
    bool2: number,
    total:number
  };

  constructor() {
    this.init();
  }

  init(){
    this.bool= {
      bool1: false,
      bool2: false
    };

    this.scores= {
      bool1: 0,
      bool2: 0,
      total:0
    };
  }

  reset(){
    this.init();
  }

  calculScore(label, score, label2){
    this.bool[label] = (this.bool[label]) ? false : true;
    this.bool[label2] = false;
    this.scores.total = (!this.bool[label]) ? 0 : score;
    this.pushScore();
  }

  pushScore() :void{
    this.notifyScorM5.emit(this.scores.total);
  }
}
