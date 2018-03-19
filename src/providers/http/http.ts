import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import * as _ from 'lodash'

import 'rxjs/add/operator/map';
import {DataProvider} from "../data/data";

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
  constructor(public http: HttpClient, public loadingCtrl: LoadingController, private currentData: DataProvider) {
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
    console.log(this.url.apiDev + chemin);
    return this.http.get(this.url.apiDev + chemin).map((res)=>{
      // The return value gets picked up by the then in the controller.
      console.log('res : ', res)
      loading.dismiss();
      return res;
    }, (error)=> {
      loading.dismiss();
      console.log('error : ', error);
      return error;
    });
  }

  asyncPost(chemin, params, token) {
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
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + token,
      })
    };
    // $http returns a promise, which has a then function, which also returns a promise
    // url prod : http://collab-lod.nexen.net:12345/api/
    // url dev : http://contestmanager.dev/api/
    console.log('url api : ', this.url.apiDev + chemin);
    console.log('body : ', body);
    console.log('headers : ', headers);
    return this.http.post(this.url.apiDev + chemin, body, headers).map((res)=>{
      // The return value gets picked up by the then in the controller.
      loading.dismiss();
      return res;
    }, (reason)=> {
      loading.dismiss();
      console.log('ERREUR API');
      return reason;
    });
  }

  login(params) {
    let chemin = 'arbiter/login';

    const body = new HttpParams()
      .set('username', 'arbiter')
      .set('password', params);

    return this.http.post(this.url.apiDev + chemin, {username: 'arbiter', password: params}, {observe: 'response'}).map((res, headers)=>{
      // The return value gets picked up by the then in the controller.
      localStorage.setItem('currentUser', JSON.stringify(res.body));
      return res;
    }, (reason)=> {
      console.log('ERREUR API');
      return reason;
    });
  }

}
