import {Component, EventEmitter, Output} from '@angular/core';

/**
 * Generated class for the Mission3C2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission3-c2',
  templateUrl: 'mission3-c2.html'
})
export class Mission3C2Component {
  @Output() notifyScorM3: EventEmitter<number> = new EventEmitter<number>();

  bool: {
    bool1: boolean,
    bool2: boolean,
    bool3: boolean
  }

  scores: {
    bool1: number,
    bool2: number,
    bool3: number,
    total:number
  };
  showModal: boolean;

  constructor() {
    this.init();
  }

  init(){
    this.showModal = false;
    this.bool= {
      bool1: false,
      bool2: false,
      bool3: false
    };

    this.scores= {
      bool1: 0,
      bool2: 0,
      bool3: 0,
      total:0
    };
  }

  reset(){
    this.init();
  }

  calculScore(label, score){
    this.bool[label] = !this.bool[label];
    (this.bool[label]) ? this.scores[label] = score : this.scores[label] = 0;
    this.scores.total = this.scores.bool1 + this.scores.bool2 + this.scores.bool3;
    this.pushScore();
  }

  pushScore() :void{
    this.notifyScorM3.emit(this.scores.total);
  }

}
