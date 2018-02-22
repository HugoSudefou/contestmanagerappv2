import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchMatchPage } from './search-match';

@NgModule({
  declarations: [
    SearchMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchMatchPage),
  ],
})
export class SearchMatchPageModule {}
