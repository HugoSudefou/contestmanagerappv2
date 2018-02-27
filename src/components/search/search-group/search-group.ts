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
  groups: any;
  currentGroup;
  idTournament: number;
  hiddenDivGroup: boolean = true;

  constructor(private http: HttpProvider) {
    console.log('Hello SearchGroupComponent Component');
    this.currentGroup = (localStorage['currentGroupT'] !== undefined) ? JSON.parse(localStorage.getItem('currentGroupT')) : null;
    this.groups = [];
    this.search();
  }

  search(){
    console.log('---------------------- SearchGroup -----------------------');
    let url = 'matchs/groups';
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res.json());
      this.groups = res.json();
      this.hiddenDivGroup = false;
      console.log('this.groups : ', this.groups);
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }

  selectGroup(group){
    this.notifySearchGroup.emit(group);
  }

}
