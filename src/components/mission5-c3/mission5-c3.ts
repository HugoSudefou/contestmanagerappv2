import { Component } from '@angular/core';

/**
 * Generated class for the Mission5C3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission5-c3',
  templateUrl: 'mission5-c3.html'
})
export class Mission5C3Component {

  text: string;

  constructor() {
    console.log('Hello Mission5C3Component Component');
    this.text = 'Hello World';
  }

}
