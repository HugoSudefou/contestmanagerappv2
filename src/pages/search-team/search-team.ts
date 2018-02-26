import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the SearchTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-team',
  templateUrl: 'search-team.html',
  providers: [HttpProvider]
})
export class SearchTeamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider) {
    this.search();
  }

  ionViewDidLoad() {
  }

  search(){
    console.log('---------------------- SelectGroup -----------------------');
    let urlGroupId = 'tournaments';
    this.http.async(urlGroupId).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('API', res.json());
      return res;
    }, (reason)=> {
      console.log('ERREUR API : ', reason);
      return reason;
    });
  }

}
