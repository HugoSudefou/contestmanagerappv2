import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Generated class for the Mission3C3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission3-c3',
  templateUrl: 'mission3-c3.html'
})
export class Mission3C3Component {
  @Output() notifyScorM3: EventEmitter<number> = new EventEmitter<number>();
  @Input() penalities: number;

  bool: boolean;
  colorBool: string;
  scores: {total: number};
  range : {
    first: {
      max: number,
      value: number
    },
    second: {
      max: number,
      value: number
    },
    third: {
      max: number,
      value: number
    },
    fourth: {
      max: number,
      value: number
    },
    five: {
      max: number,
      value: number
    },
    six: {
      max: number,
      value: number
    },
  };

  constructor() {
    this.init();
  }

  init() {
    this.bool = false;
    this.colorBool = 'red';
    this.scores = {
      total: 0
    };
    let max = this.penalities
    this.range = {
      first: {
        max: 10,
        value: 0
      },
      second: {
        max: 10,
        value: 0
      },
      third: {
        max: 10,
        value: 0
      },
      fourth: {
        max: 10,
        value: 0
      },
      five: {
        max: 10,
        value: 0
      },
      six: {
        max: 10,
        value: 0
      }
    };
  }

  upBool(){
    this.bool= !this.bool;
    this.colorBool= (this.bool) ? 'green' : 'red';
    (this.bool) ? this.upRange2() : this.upRange1();
  }

  upRange1() :void{
    this.range.first.max = (10 - this.penalities) - (this.range.second.value + this.range.third.value);
    this.range.second.max = (10 - this.penalities) - (this.range.first.value + this.range.third.value);
    this.range.third.max = (10 - this.penalities) - (this.range.first.value + this.range.second.value);

    let range1 = 1 * this.range.first.value;
    let range2 = 2 * this.range.second.value;
    let range3 = 3 * this.range.third.value;

    this.scores.total = range1 + range2 + range3;
    this.pushScore();
  }

  upRange2() :void{
    this.range.fourth.max = (10 - this.penalities) - (this.range.five.value + this.range.six.value);
    this.range.five.max = (10 - this.penalities) - (this.range.fourth.value + this.range.six.value);
    this.range.six.max = (10 - this.penalities) - (this.range.five.value + this.range.second.value);

    let range1 = 6 * this.range.fourth.value;
    let range2 = 8 * this.range.five.value;
    let range3 = 10 * this.range.six.value;
    this.scores.total = range1 + range2 + range3;
    this.pushScore();
  }

  pushScore() :void{
    this.notifyScorM3.emit(this.scores.total);
  }

  reset(){
    this.init();
  }

}
