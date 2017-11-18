import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { missionCycle2 } from './missionCycle2';
import { ComponentsC2Module } from '../../components/componentsC2.module';

@NgModule({
  declarations: [
    missionCycle2
  ],
  imports: [
    IonicPageModule.forChild(missionCycle2),
    ComponentsC2Module
  ],
  exports: [
    missionCycle2
  ]
})
export class missionCycle2Module {}
