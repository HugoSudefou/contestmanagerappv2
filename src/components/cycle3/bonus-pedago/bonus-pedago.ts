import {Component, EventEmitter, Output} from '@angular/core';
import * as _ from 'lodash';

/**
 * Generated class for the BonusPedagoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bonus-pedago',
  templateUrl: 'bonus-pedago.html'
})
export class BonusPedagoComponent {
  @Output() notifyBonusPeda: EventEmitter<number> = new EventEmitter<number>();

  bool: {
    bool1: boolean,
    bool2: boolean,
    bool3: boolean,
    bool4: boolean,
    bool5: boolean,
    bool6: boolean,
    bool7: boolean,
    bool8: boolean,
    bool9: boolean,
    bool10: boolean
  };
  scores: {
    bool1: number,
    bool2: number,
    bool3: number,
    bool4: number,
    bool5: number,
    bool6: number,
    bool7: number,
    bool8: number,
    bool9: number,
    bool10: number,
    part2: number,
    total: number
  };
  showPart2: boolean = false;

  constructor() {
    this.init();
  }

  init() {
    this.bool= {
      bool1: false,
      bool2: false,
      bool3: false,
      bool4: false,
      bool5: false,
      bool6: false,
      bool7: false,
      bool8: false,
      bool9: false,
      bool10: false
    };

    this.scores = {
      bool1: 0,
      bool2: 0,
      bool3: 0,
      bool4: 0,
      bool5: 0,
      bool6: 0,
      bool7: 0,
      bool8: 0,
      bool9: 0,
      bool10: 0,
      part2: 0,
      total:0
    };
  }

  calculScore(labelBool: string, score: number){
    if (this.bool[labelBool]) this.scores[labelBool] = score;
    else this.scores[labelBool] = 0;
    this.initializePart2();
  }

  initializePart2(){
    this.scores.part2 = (this.showPart2) ? this.scores.bool6 + this.scores.bool7 + this.scores.bool8 + this.scores.bool9 + this.scores.bool10 : 0;
    this.scores.total = this.scores.part2 + this.scores.bool1 + this.scores.bool2 + this.scores.bool3 + this.scores.bool4 + this.scores.bool5;
    this.pushScore();
  }

  pushScore(){
    this.notifyBonusPeda.emit(this.scores.total);
  }

  reset(){
    this.init();
  }

}
