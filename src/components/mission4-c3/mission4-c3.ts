import { Component } from '@angular/core';

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

  bool: {
    first: boolean,
    second: boolean,
    third: boolean,
    fourth: boolean,
    five: boolean,
    six: boolean
  };
  colorBool: string;
  scores: {tab1: number, tab2: number, total: number};
  text: string;

  constructor() {
    this.bool = {
      first: false,
      second: false,
      third: false,
      fourth: false,
      five: false,
      six: false
    };
    this.colorBool = 'red';
    this.scores = {
      tab1: 0,
      tab2: 0,
      total: 0
    };
    console.log('Hello Mission4C3Component Component');
    this.colorBool = 'Hello World';
  }

  bool1(test){
    console.log(test);
  }

  bool2(test){
    console.log(test);
  }

}
