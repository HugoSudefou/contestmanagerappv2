import {Component, EventEmitter, Output} from '@angular/core';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the SearchGroupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-group',
  templateUrl: 'search-group.html'
})
export class SearchGroupComponent {
  @Output() notifySearchGroup: EventEmitter<number> = new EventEmitter<number>();

  objectKeys = Object.keys;
  groups: {};
  currentGroup;
  idTournament: number;
  hiddenDivGroup: boolean = true;

  constructor(private http: HttpProvider) {
    console.log('Hello SearchGroupComponent Component');
    this.currentGroup = (localStorage['currentGroup'] !== undefined) ? JSON.parse(localStorage.getItem('currentGroup')) : null;
    this.groups = {};
  }

  search(idTournament){
    if (idTournament !== undefined && idTournament !== null) this.idTournament = idTournament;
    else idTournament = this.idTournament;
    console.log('---------------------- SearchGroup -----------------------');
    console.log('idTournamentClass : ', idTournament);
    let url = 'tournaments/groups/' + idTournament;
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res.json());
      this.groups = res.json();
      this.hiddenDivGroup = false;
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }

  selectGroup(group){
    let idGroup = group.id;
    localStorage.setItem('currentGroup', JSON.stringify(group));
    console.log('idGroup : ', idGroup);
    this.notifySearchGroup.emit(idGroup);
  }

}
