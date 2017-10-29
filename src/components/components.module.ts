import { NgModule } from '@angular/core';
import { PenaltiesComponent } from './penalties/penalties';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { TotalComponent } from './total/total';
import { Mission1C2Component } from './mission1-c2/mission1-c2';
import { Mission1C3Component } from './mission1-c3/mission1-c3';
import { Mission2C3Component } from './mission2-c3/mission2-c3';
import { Mission3C3Component } from './mission3-c3/mission3-c3';
@NgModule({
	declarations: [Mission1C2Component,
    PenaltiesComponent,
    TotalComponent,
    Mission1C3Component,
    Mission2C3Component,
    Mission3C3Component],
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
    Mission3C3Component]
})
export class ComponentsModule {}
