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

  data: {
    isArbitre: boolean,
    tournament: {},
    group: {},
    team: {},
    match: {},
    score: {
      cycle2:Array<any>,
      cycle3:Array<any>
    },
  };

  constructor(public http: Http) {
    this.data = {
      isArbitre: false,
      tournament: {},
      group: {},
      team: {},
      match: {},
      score: {
        cycle2:[],
        cycle3:[]
      },
    }
  }

  getData(){
    return this.data;
  }

  getIsArbitre():boolean{
    return this.data.isArbitre;
  }

  getTournament(){
    return this.data.tournament;
  }

  getGroup(){
    return this.data.group;
  }

  getTeam(){
    return this.data.team;
  }

  getMatch(){
    return this.data.match;
  }

  getScore(){
    return this.data.score;
  }

  setIsArbitre(isArbitre){
    this.data.isArbitre = isArbitre;
  }

  setTournament(tournament){
    this.data.tournament = tournament;
  }

  setGroup(group){
    this.data.group = group;
  }

  setTeam(team){
    return this.data.team = team;
  }

  setMatch(match){
    return this.data.match = match;
  }


}
