import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      let scores = {
        "cycle2":[],
        "cycle3":[]
      };
      localStorage.setItem('isArbitre', 'false');
      //console.log('JSON.parse(localStorage["scores"]) : ', JSON.parse(localStorage["scores"]))
      if(localStorage.length === 0) localStorage.setItem('scores', JSON.stringify(scores));
      else if(localStorage["scores"] === undefined) localStorage.setItem('scores', JSON.stringify(scores));
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

