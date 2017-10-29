import { Component, Input  } from '@angular/core';

/**
 * Generated class for the TotalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'total',
  templateUrl: 'total.html'
})
export class TotalComponent {
  @Input() scores: {};

  constructor() {
  }
}
