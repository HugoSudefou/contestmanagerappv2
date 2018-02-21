import {Component, EventEmitter, Output} from '@angular/core';

/**
 * Generated class for the Mission6C2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission6-c2',
  templateUrl: 'mission6-c2.html'
})
export class Mission6C2Component {

  @Output() notifyScorM6: EventEmitter<number> = new EventEmitter<number>();

  bool: {
    bool1: boolean,
    bool2: boolean
  }

  scores: {
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
    this.notifyScorM6.emit(this.scores.total);
  }

}
