import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchTeamPage } from './search-team';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SearchTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchTeamPage),
    ComponentsModule
  ],
  exports: [
    SearchTeamPage
  ]
})
export class SearchTeamPageModule {}
