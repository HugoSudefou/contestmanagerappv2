import {Component, EventEmitter, Output} from '@angular/core';

/**
 * Generated class for the BonusTechnoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bonus-techno',
  templateUrl: 'bonus-techno.html'
})
export class BonusTechnoComponent {
  @Output() notifyBonusTec: EventEmitter<number> = new EventEmitter<number>();

  scores: {
    total: number
  };

  range = {
    moteur: {
      max: 2,
      value: 0,
    },
    capteur: {
      max: 4,
      value: 0
    },
    imprimante: {
      max: 2,
      value: 0
    }
  };

  bool4: boolean;

  constructor() {
    this.init();
  }

  init() {
    this.bool4 = false;
    this.scores = {
      total: 0
    };

    this.range = {
      moteur: {
        max: 2,
        value: 0
      },
      capteur: {
        max: 4,
        value: 0
      },
      imprimante: {
        max: 2,
        value: 0
      }
    };
  }

  calculScore(){
    let range1 = 20 * this.range.moteur.value;
    let range2 = 20 * this.range.capteur.value;
    let range3 = 20 * this.range.imprimante.value;

    this.scores.total = range1 + range2 + range3;
    (this.bool4) ? this.scores.total += 40 : this.scores.total += 0;
    this.pushScore(); this.pushScore()
  }

  pushScore(){
    this.notifyBonusTec.emit(this.scores.total);
  }

  reset(){
    this.init();
  }
}
