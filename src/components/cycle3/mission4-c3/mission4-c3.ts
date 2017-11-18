import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the Mission4C3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission4-c3',
  templateUrl: 'mission4-c3.html'
})
export class Mission4C3Component {
  @Output() notifyScorM4: EventEmitter<number> = new EventEmitter<number>();

  bool: {
    tab1: Array<boolean>,
    tab2: Array<boolean>
  };
  colorBool: string;
  scores: {tab1: number, tab2: number, total: number};
  text: string;

  constructor() {
    this.init();
  }

  init() {
    this.bool = {
      tab1:[false, false, false],
      tab2:[false, false, false]
    };
    this.colorBool = 'red';
    this.scores = {
      tab1: 0,
      tab2: 0,
      total: 0
    };
  }

  calculScore(numTab:number, labelBool: number){
    this.bool['tab' + numTab][labelBool] = !this.bool['tab' + numTab][labelBool]
    if(numTab === 1) {
      this.calculScoreTab1()
    }
    else if(numTab === 2) {
      this.calculScoreTab2()
    }
    else {}
    this.scores.total = this.scores.tab1 + this.scores.tab2
    this.pushScore();
  }

  calculScoreTab1() {
    let i = 0;
    this.bool.tab1.forEach((item: boolean) => {
      if(item) i++;
    })
    if (i === 1){
      if(this.bool.tab1[2] === true) this.scores.tab1 = 20
      else this.scores.tab1 = 10
    }
    else if (i === 2) this.scores.tab1 = 30
    else if (i === 3) this.scores.tab1 = 50
    else this.scores.tab1 = 0
  }

  calculScoreTab2() {
    let i = 0;
    this.bool.tab2.forEach((item: boolean) => {
      if(item) i++;
    })
    if (i === 1){
      if(this.bool.tab2[2] === true) this.scores.tab2 = 20
      else this.scores.tab2 = 10
    }
    else if (i === 2) this.scores.tab2 = 30
    else if (i === 3) this.scores.tab2 = 50
    else this.scores.tab2 = 0
  }

  pushScore() :void{
    this.notifyScorM4.emit(this.scores.total);
  }

  reset(){
    this.init();
  }
}
