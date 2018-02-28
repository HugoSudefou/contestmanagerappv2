import {Component, EventEmitter, Output} from '@angular/core';
import * as _ from 'lodash';

/**
 * Generated class for the BonusC2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bonus-c2',
  templateUrl: 'bonus-c2.html'
})
export class BonusC2Component {

  @Output() notifyScorBonus: EventEmitter<number> = new EventEmitter<number>();

  bool: {
    bool1: boolean
  }

  scores: {
    bool1: number,
    total:number
  };

  colorBackground: {
    cas1:{
      first:boolean,
      second:boolean,
      third:boolean
    }
  };

  errorMessageBlock: String;
  asErrorMessage: String;
  showModal: boolean;
  nbBlock: number;

  constructor() {
    this.init();
  }

  init(){
    this.bool= {
      bool1: false
    };

    this.scores= {
      bool1: 0,
      total:0
    };

    this.errorMessageBlock = '';
    this.asErrorMessage = null;
    this.showModal = false;
    this.nbBlock = 0;
    this.colorBackground = {
      cas1:{
        first: false,
        second: false,
        third: false
      }
    };
  }

  reset(){
    this.init();
  }


  changeColor(position, nCas) {
    let change: boolean = true;
    if (!this.colorBackground[nCas][position]) {
      _.forEach(this.colorBackground[nCas], (key, pos) => {
        if(change) this.colorBackground[nCas][pos] = true;
        if (position === pos) change = false;
      })
      this.calculScore();
    }
    else{
      _.forEachRight(this.colorBackground[nCas], (key, pos) => {
        if(change) this.colorBackground[nCas][pos] = false;
        if (position === pos) change = false;
      })
      this.calculScore();
    }
  }

  calculScore(label=null, score=null){
    if(label !== null && score != null){
      this.bool[label] = !this.bool[label];
      (this.bool[label]) ? this.scores[label] = score : this.scores[label] = 0;
    }
    this.scores.total = this.scores.bool1 ;
    _.forEach(this.colorBackground['cas1'], (key, pos) => {
      if(key) this.scores.total += 10;
    });
    this.pushScore();
  }

  pushScore() :void{
    this.notifyScorBonus.emit(this.scores.total);
  }

}
