import { NgModule } from '@angular/core';
import { PenaltiesComponent } from './cycle3/penalties-c3/penalties';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { TotalC3Component } from './cycle3/total-c3/total';

import { Mission1C3Component } from './cycle3/mission1-c3/mission1-c3';
import { Mission2C3Component } from './cycle3/mission2-c3/mission2-c3';
import { Mission3C3Component } from './cycle3/mission3-c3/mission3-c3';
import { Mission4C3Component } from './cycle3/mission4-c3/mission4-c3';
import { Mission5C3Component } from './cycle3/mission5-c3/mission5-c3';
import { Mission6C3Component } from './cycle3/mission6-c3/mission6-c3';
import { BonusC3Component } from './cycle3/bonus-c3/bonus-c3';
import { TimerC3Component } from './cycle3/timer/timer';

@NgModule({
	declarations: [
    PenaltiesComponent,
    TotalC3Component,
    Mission1C3Component,
    Mission2C3Component,
    Mission3C3Component,
    Mission4C3Component,
    Mission5C3Component,
    Mission6C3Component,
    BonusC3Component,
    TimerC3Component
  ],
	imports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
	exports: [
    PenaltiesComponent,
    TotalC3Component,
    Mission1C3Component,
    Mission2C3Component,
    Mission3C3Component,
    Mission4C3Component,
    Mission5C3Component,
    Mission6C3Component,
    BonusC3Component,
    TimerC3Component
  ]
})
export class ComponentsC3Module {}
