import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { missionCycle2 } from './missionCycle2';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    missionCycle2
  ],
  imports: [
    IonicPageModule.forChild(missionCycle2),
    ComponentsModule
  ],
  exports: [
    missionCycle2
  ]
})
export class missionCycle2Module {}
