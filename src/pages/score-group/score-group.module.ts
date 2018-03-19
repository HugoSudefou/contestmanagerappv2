import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoreGroupPage } from './score-group';

@NgModule({
  declarations: [
    ScoreGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoreGroupPage),
  ],
})
export class ScoreGroupPageModule {}
