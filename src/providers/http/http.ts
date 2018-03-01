import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import * as _ from 'lodash'

import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  url = {
    api : 'http://collab-lod.nexen.net:12345/api/',
    apiDev : 'http://127.0.0.1:8000/api/',
    apiDevLouis : 'http://127.0.0.1:8000/api/',
  };
  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
    console.log('Hello HttpProvider Provider');
  }

  async(chemin) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    // $http returns a promise, which has a then function, which also returns a promise
    // url prod : http://collab-lod.nexen.net:12345/api/
    // url dev : http://contestmanager.dev/api/
    console.log(this.url.api + chemin);
    return this.http.get(this.url.api + chemin).map((res)=>{
      // The return value gets picked up by the then in the controller.
      loading.dismiss();
      return res;
    }, (error)=> {
      loading.dismiss();
      return error;
    });
  }

  asyncPost(chemin, params) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    console.log('url POST : ');
    const body = new HttpParams()
    .set('id_match', params.id_match)
    .set('id_team', params.id_team)
    .set('score', params.score);
    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    // $http returns a promise, which has a then function, which also returns a promise
    // url prod : http://collab-lod.nexen.net:12345/api/
    // url dev : http://contestmanager.dev/api/
    console.log('url api : ', this.url.api + chemin);
    console.log('body : ', body);
    console.log('headers : ', headers);
    return this.http.post(this.url.api + chemin, body, headers).map((res)=>{
      // The return value gets picked up by the then in the controller.
      loading.dismiss();
      return res;
    }, (reason)=> {
      loading.dismiss();
      console.log('ERREUR API');
      return reason;
    });
  }

}
