import { Component } from '@angular/core';

/**
 * Generated class for the Mission6C3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission6-c3',
  templateUrl: 'mission6-c3.html'
})
export class Mission6C3Component {

  text: string;

  constructor() {
    console.log('Hello Mission6C3Component Component');
    this.text = 'Hello World';
  }

}
