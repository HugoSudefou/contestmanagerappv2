import {Component, EventEmitter, Output} from '@angular/core';
import { HttpProvider } from '../../../providers/http/http';
import { HomePage } from '../../../pages/home/home';
import {AlertController, LoadingController, NavController} from 'ionic-angular';

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

  constructor(private http: HttpProvider, public navCtrl: NavController, public alertController: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello SearchGroupComponent Component');
    this.currentGroup = (localStorage['currentGroupT'] !== undefined) ? JSON.parse(localStorage.getItem('currentGroupT')) : null;
    this.groups = [];
    this.search();
  }

  search(){
    let loading = this.loadingCtrl.create({
      content: 'Chargement des données...'
    });
    loading.present();
    console.log('---------------------- SearchGroup -----------------------');
    let url = 'groups';
    this.http.async(url).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res);
      this.groups = res;
      this.hiddenDivGroup = false;
      console.log('this.groups : ', this.groups);
      loading.dismissAll();
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      loading.dismissAll();
      this.errorPopup(loading).present();
      return reason;
    }, ()=>{
    });
  }

  selectGroup(group){
    this.notifySearchGroup.emit(group);
  }


  errorPopup(loading){
    return this.alertController.create({
      title: 'Une erreur est survenue vous allez être redirigé',
      cssClass: 'popupSave',
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          handler: data => {
            //this.navCtrl.push(HomePage, {loading: loading});
          }
        }
      ]
    });
  }
}
