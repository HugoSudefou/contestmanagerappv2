import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the BonusC3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bonus-c3',
  templateUrl: 'bonus-c3.html'
})
export class BonusC3Component {
  @Output() notifyBonus: EventEmitter<number> = new EventEmitter<number>();

  bool: {bool1: boolean, bool2: boolean, bool3: boolean, bool4: boolean};
  scores: {bool1: number, bool2: number, bool3: number, bool4: number, total: number};

  constructor() {
    this.bool= {
      bool1: false,
      bool2: false,
      bool3: false,
      bool4: false
    };

    this.scores = {
      bool1: 0,
      bool2: 0,
      bool3: 0,
      bool4: 0,
      total: 0
    };
  }

  calculScore(labelBool: string, score: number){
    if (this.bool[labelBool]) this.scores[labelBool] = score;
    else this.scores[labelBool] = 0;
    this.scores.total = this.scores.bool1 + this.scores.bool2 + this.scores.bool3 + this.scores.bool4;
    this.pushScore()
  }

  pushScore(){
    this.notifyBonus.emit(this.scores.total);
  }
}
