import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  data;

  constructor(public http: Http) {
    this.data = {
      currentTournament: {},
      currentGroup: {},
      currentTeam: {},
      score: {
        cycle2:[],
        cycle3:[]
      },
    }
  }

  getData(){
    return this.data;
  }

  getCurrentTournament(){
    return this.data;
  }

  getCurrentGroup(){
    return this.data;
  }

  getCurrentTeam(){
    return this.data;
  }

  getScore(){
    return this.data.score;
  }

  setCurrentTournament(tournament){
    this.data.currentTournament = tournament;
  }

  setCurrentGroup(group){
    this.data.currentGroup = group;
  }

  setCurrentTeam(team){
    return this.data.currentTeam = team;
  }


}
