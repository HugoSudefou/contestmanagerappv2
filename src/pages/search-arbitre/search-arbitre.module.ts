import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchMatchPage } from './search-arbitre';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SearchMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchMatchPage),
    ComponentsModule,
  ],
  exports: [
    SearchMatchPage
  ]
})
export class SearchMatchPageModule {}
