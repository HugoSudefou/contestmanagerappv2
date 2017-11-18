import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { missionCycle3 } from './missionCycle3';
import { ComponentsC3Module } from '../../components/componentsC3.module';

@NgModule({
  declarations: [
    missionCycle3
  ],
  imports: [
    IonicPageModule.forChild(missionCycle3),
    ComponentsC3Module
  ],
  exports: [
    missionCycle3
  ]
})
export class missionCycle3Module {}
