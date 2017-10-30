import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello BonusC3Component Component');
    this.text = 'Hello World';
  }

}
