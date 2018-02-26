import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { SearchTournamentsComponent } from './searchArbitre/search-tournaments/search-tournaments';
import { SearchGroupComponent } from './searchArbitre/search-group/search-group';
import { SearchTeamComponent } from './searchArbitre/search-team/search-team';
import { SearchMatchComponent } from './searchArbitre/search-match/search-match';

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
