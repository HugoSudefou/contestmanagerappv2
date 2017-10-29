import { Component } from '@angular/core';

/**
 * Generated class for the Mission1C2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission1-c2',
  templateUrl: 'mission1-c2.html'
})
export class Mission1C2Component {

  text: string;

  constructor() {
    console.log('Hello Mission1C2Component Component');
    this.text = 'Hello World';
  }

}
