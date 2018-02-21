import { NgModule } from '@angular/core';
import { PenaltiesComponent } from './cycle2/penalties-c2/penalties';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { TotalC2Component } from './cycle2/total-c2/total';
import { Mission1C2Component } from './cycle2/mission1-c2/mission1-c2';
import { Mission2C2Component } from './cycle2/mission2-c2/mission2-c2';
import { Mission3C2Component } from './cycle2/mission3-c2/mission3-c2';
import { Mission4C2Component } from './cycle2/mission4-c2/mission4-c2';
import { Mission5C2Component } from './cycle2/mission5-c2/mission5-c2';
import { Mission6C2Component } from './cycle2/mission6-c2/mission6-c2';
import { BonusC2Component } from './cycle2/bonus-c2/bonus-c2';
import { TimerC2Component } from './cycle2/timer/timer';

@NgModule({
	declarations: [
	  Mission1C2Component,
    Mission2C2Component,
    Mission3C2Component,
    Mission4C2Component,
    Mission5C2Component,
    Mission6C2Component,
    BonusC2Component,
    PenaltiesComponent,
    TotalC2Component,
    TimerC2Component
  ],
	imports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
	exports: [
	  Mission1C2Component,
    Mission2C2Component,
    Mission3C2Component,
    Mission4C2Component,
    Mission5C2Component,
    Mission6C2Component,
    BonusC2Component,
    PenaltiesComponent,
    TotalC2Component,
    TimerC2Component
  ]
})
export class ComponentsC2Module {}
