import {Component, EventEmitter, Output} from '@angular/core';
import {HttpProvider} from "../../../providers/http/http";

/**
 * Generated class for the SearchTeamComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-team',
  templateUrl: 'search-team.html'
})
export class SearchTeamComponent {
  @Output() notifySearchTeam: EventEmitter<number> = new EventEmitter<number>();

  teams: Array<{}>;
  idGroup: number;
  currentTeam;
  hiddenDivTeam: boolean = true;

  constructor(private http: HttpProvider) {
    console.log('Hello SearchGroupComponent Component');
    this.currentTeam = (localStorage['currentTeam'] !== undefined) ? JSON.parse(localStorage.getItem('currentTeam')) : null;
    console.log('this.currentTeam : ', this.currentTeam);
    this.teams =  [{}];
  }

  search(idGroup){
    if (idGroup !== undefined && idGroup !== null) this.idGroup = idGroup;
    else idGroup = this.idGroup;
    console.log('---------------------- SearchGroup -----------------------');
    console.log('idGroup : ', idGroup);
    let url = 'groups/' + idGroup +  '/match';
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res.json());
      this.teams = res.json()[0]["team"];
      this.hiddenDivTeam = false;
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }

  selectTeam(team){
    let idTeam = team.id;
    localStorage.setItem('currentTeam', JSON.stringify(team));
    console.log('idTeam : ', idTeam);
    this.notifySearchTeam.emit(idTeam);
  }

}
