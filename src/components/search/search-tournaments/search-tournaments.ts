import {Component, EventEmitter, Output} from '@angular/core';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the SearchTournamentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-tournaments',
  templateUrl: 'search-tournaments.html'
})
export class SearchTournamentsComponent {
  @Output() notifySearchTounaments: EventEmitter<number> = new EventEmitter<number>();

  tournaments: Array<{}>;
  currentTournament;
  hiddenDivTournament: boolean = true;

  constructor(private http: HttpProvider) {
    console.log('Hello SearchTournamentsComponent Component');
    this.currentTournament = (localStorage['currentTournament'] !== undefined) ? JSON.parse(localStorage.getItem('currentTournament')) : null;
    this.tournaments = [{}];
    this.search();
  }

  search(){
    console.log('---------------------- SearchTournament -----------------------');
    let urlGroupId = 'tournaments';
    this.http.async(urlGroupId).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res.json());
      this.tournaments = res.json();
      this.hiddenDivTournament = false;
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }

  selectTournament(tournament){
    let idTournament = tournament.id;
    localStorage.setItem('currentTournament', JSON.stringify(tournament));
    console.log('idTournament : ', idTournament);
    this.notifySearchTounaments.emit(idTournament);
  }
}
