import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';

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
  };
  constructor(public http: Http, public loadingCtrl: LoadingController) {
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
      loading.dismiss();
      return res;
    }, (error)=> {
      return error;
    });
  }

  asyncPost(chemin, body) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    console.log('url POST : ');
    // $http returns a promise, which has a then function, which also returns a promise
    // url prod : http://collab-lod.nexen.net:12345/api/
    // url dev : http://contestmanager.dev/api/
    console.log('url api : ');
    console.log(this.url.apiDev + chemin);
    this.http.post(this.url.apiDev + chemin, body).subscribe((res)=>{
      // The return value gets picked up by the then in the controller.
      loading.dismiss();
      return res;
    }, (reason)=> {
      console.log('ERREUR API');
      return reason;
    });
  }

}
