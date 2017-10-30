import { NgModule } from '@angular/core';
import { PenaltiesComponent } from './penalties/penalties';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { TotalComponent } from './total/total';
import { Mission1C2Component } from './mission1-c2/mission1-c2';
import { Mission1C3Component } from './mission1-c3/mission1-c3';
import { Mission2C3Component } from './mission2-c3/mission2-c3';
import { Mission3C3Component } from './mission3-c3/mission3-c3';
import { Mission4C3Component } from './mission4-c3/mission4-c3';
import { Mission5C3Component } from './mission5-c3/mission5-c3';
import { Mission6C3Component } from './mission6-c3/mission6-c3';
import { BonusC3Component } from './bonus-c3/bonus-c3';
@NgModule({
	declarations: [Mission1C2Component,
    PenaltiesComponent,
    TotalComponent,
    Mission1C3Component,
    Mission2C3Component,
    Mission3C3Component,
    Mission4C3Component,
    Mission5C3Component,
    Mission6C3Component,
    BonusC3Component],
	imports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
	exports: [Mission1C2Component,
    PenaltiesComponent,
    TotalComponent,
    Mission1C3Component,
    Mission2C3Component,
    Mission3C3Component,
    Mission4C3Component,
    Mission5C3Component,
    Mission6C3Component,
    BonusC3Component]
})
export class ComponentsModule {}
