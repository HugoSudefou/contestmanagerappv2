import { NgModule } from '@angular/core';
import { PenaltiesComponent } from './cycle2/penalties-c2/penalties';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { TotalC2Component } from './cycle2/total-c2/total';
import { Mission1C2Component } from './cycle2/mission1-c2/mission1-c2';
import { TimerC2Component } from './cycle2/timer/timer';
import { Mission2C2Component } from './cycle2/mission2-c2/mission2-c2';

@NgModule({
	declarations: [
	  Mission1C2Component,
    Mission2C2Component,
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
    PenaltiesComponent,
    TotalC2Component,
    TimerC2Component
  ]
})
export class ComponentsC2Module {}
