import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the Mission2C3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission2-c3',
  templateUrl: 'mission2-c3.html'
})
export class Mission2C3Component {
  @Output() notifyScorM2: EventEmitter<number> = new EventEmitter<number>();

  colorRange: string;
  test: number;
  scores: {
    total: number
  };
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
  };

  constructor() {
    this.test = 4;
    this.colorRange = 'red';
    this.scores = {
      total: 0
    };
    this.range = {
      first: {
        max: 4,
        value: 0
      },
      second: {
        max: 4,
        value: 0
      },
      third: {
        max: 4,
        value: 0
      },
      fourth: {
        max: 4,
        value: 0
      },
      five: {
        max: 4,
        value: 0
      },
    };
  }

  upRange(event){
    this.range.first.max = 4 - (this.range.second.value + this.range.third.value + this.range.fourth.value + this.range.five.value);
    this.range.second.max = 4 - (this.range.first.value + this.range.third.value + this.range.fourth.value + this.range.five.value);
    this.range.third.max = 4 - (this.range.first.value + this.range.second.value +  this.range.fourth.value + this.range.five.value);
    this.range.fourth.max = 4 - (this.range.first.value + this.range.second.value + this.range.third.value + this.range.five.value);
    this.range.five.max = 4 - (this.range.first.value + this.range.second.value + this.range.third.value + this.range.fourth.value);

    let range1 = 1 * this.range.first.value;
    let range2 = 2 * this.range.second.value;
    let range3 = 10 * this.range.third.value;
    let range4 = 15 * this.range.fourth.value;
    let range5 = 25 * this.range.five.value;
    this.scores.total = range1 + range2 + range3 + range4 + range5;

    this.notifyScorM2.emit(this.scores.total);
  }

}
