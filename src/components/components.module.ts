import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { SearchTournamentsComponent } from './search/search-tournaments/search-tournaments';
import { SearchGroupComponent } from './search/search-group/search-group';
import { SearchTeamComponent } from './search/search-team/search-team';
import { SearchMatchComponent } from './search/search-match/search-match';
import { SearchGroupByTournamentComponent } from './search/search-group-by-tournament/search-group-by-tournament';

@NgModule({
	declarations: [
    SearchTournamentsComponent,
    SearchGroupComponent,
    SearchTeamComponent,
    SearchMatchComponent,
    SearchGroupByTournamentComponent,
    ],
	imports: [CommonModule,IonicModule],
	exports: [
    SearchTournamentsComponent,
    SearchGroupComponent,
    SearchTeamComponent,
    SearchMatchComponent,
    SearchGroupByTournamentComponent,
    ]
})
export class ComponentsModule {}
