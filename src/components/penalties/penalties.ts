import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the PenaltiesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'penalties',
  templateUrl: 'penalties.html'
})
export class PenaltiesComponent{
  nbPena: number = 0;
  @Output() notifynbPena: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.nbPena = 0;
    console.log('Hello PenaltiesComponent Component');
  }
}
