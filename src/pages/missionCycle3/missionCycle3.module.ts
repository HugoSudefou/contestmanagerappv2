import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { missionCycle3 } from './missionCycle3';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    missionCycle3
  ],
  imports: [
    IonicPageModule.forChild(missionCycle3),
    ComponentsModule,
  ],
  exports: [
    missionCycle3
  ]
})
export class missionCycle3Module {}
