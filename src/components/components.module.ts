import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { SearchTournamentsComponent } from './search/search-tournaments/search-tournaments';
import { SearchGroupComponent } from './search/search-group/search-group';
import { SearchTeamComponent } from './search/search-team/search-team';
import { SearchMatchComponent } from './search/search-match/search-match';

@NgModule({
	declarations: [
    SearchTournamentsComponent,
    SearchGroupComponent,
    SearchTeamComponent,
    SearchMatchComponent,
    ],
	imports: [CommonModule,IonicModule],
	exports: [
    SearchTournamentsComponent,
    SearchGroupComponent,
    SearchTeamComponent,
    SearchMatchComponent,
    ]
})
export class ComponentsModule {}
