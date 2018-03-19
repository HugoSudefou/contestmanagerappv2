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
    token: String
    fromHomeTeam: boolean,
    isArbitre: boolean,
    tournament: {
      id: number
    },
    group: {
      id: number},
    team: {
      id: number},
    match: {
      id: number},
    score: {
      cycle2:Array<any>,
      cycle3:Array<any>
    },
  };

  constructor(public http: Http) {
    this.data = {
      token: '',
      fromHomeTeam: false,
      isArbitre: false,
      tournament: {
        id: null
      },
      group: {
        id: null
      },
      team: {
        id: null
      },
      match: {
        id: null
      },
      score: {
        cycle2:[],
        cycle3:[]
      },
    }
  }

  getData(){
    return this.data;
  }

  getFromHomeTeam():boolean{
    return this.data.fromHomeTeam;
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

  getToken(){
    return this.data.token;
  }

  setToken(token){
    this.data.token = token;
  }

  setFromHomeTeam(fromHomeTeam){
    this.data.fromHomeTeam = fromHomeTeam;
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
