import { Component } from '@angular/core';
import * as _ from 'lodash'

/**
 * Generated class for the Mission2C2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission2-c2',
  templateUrl: 'mission2-c2.html'
})
export class Mission2C2Component {

  scores: {
    total:number
  };
  colorBackground: {
    cas1:{
      first:boolean,
      second:boolean,
      third:boolean,
      four:boolean,
    },
    cas2:{
      first:boolean,
      second:boolean,
      third:boolean,
      four:boolean,
    },
    cas3:{
      first:boolean,
      second:boolean,
      third:boolean,
      four:boolean,
    },
    cas4:{
      first:boolean,
      second:boolean,
      third:boolean,
      four:boolean,
    }
  };
  errorMessageBlock: String;

  constructor() {
    this.init()
  }

  init(){
    this.errorMessageBlock = '';
    this.scores = {
      total: 0
    };
    this.colorBackground = {
      cas1:{
        first: false,
        second: false,
        third: false,
        four: false,
      },
      cas2:{
        first: false,
        second: false,
        third: false,
        four: false,
      },
      cas3:{
        first: false,
        second: false,
        third: false,
        four: false,
      },
      cas4:{
        first: false,
        second: false,
        third: false,
        four: false,
      }
    };
  }

  changeColor(position, nCas) {
    if (!this.colorBackground[nCas][position]) {

      if(position === 'four'){
        console.log('position1 : ', position);
        let change: boolean = false;
        _.forEachRight(this.colorBackground, (dataPos, cas)=>{
          console.log('dataPos : ', dataPos);
          console.log('cas : ', cas);
          if(cas === nCas) change = true;
          _.forEach(dataPos, (pos, key)=>{
            console.log('pos : ', pos);
            console.log('key : ', key);
            if(change) this.colorBackground[cas][key] = true;
            else this.colorBackground[cas][key] = false;
          })
        })
      }
      else{
        let change: boolean = false;
        _.forEachRight(this.colorBackground[nCas], (pos, key)=>{
          if(key === position) change = true;
          if(change) this.colorBackground[nCas][key] = true;
          else this.colorBackground[nCas][key] = false;
        })
      }
    }
    else{
      if(position === 'four'){
        console.log('position2 : ', position);
        let change: boolean = true;
        _.forEachRight(this.colorBackground, (dataPos, cas)=>{
          if(cas === nCas) change = false;
          _.forEach(dataPos[cas], (pos, key)=>{
            console.log('pos : ', pos);
            console.log('key : ', key);
            if(change) this.colorBackground[cas][key] = false;
            else this.colorBackground[cas][key] = true;
          })
        })
      }
      else{
        let change: boolean = true;
        _.forEachRight(this.colorBackground[nCas], (pos, key)=>{
          if(change) this.colorBackground[nCas][key] = false;
          else this.colorBackground[nCas][key] = true;
          if(key === position) change = false;
        })
      }
    }

    this.calculScore();
  }

  calculScore(){
    this.errorMessageBlock = '';
    let score = 0;
    this.scores.total = 0;
    let nbBlock = 0;
    _.forEach(this.colorBackground, (key, cas) => {
      if(cas === 'cas0') score = 3;
      else if(cas === 'cas1') score = 5;
      else if(cas === 'cas2') score = 10;
      else if(cas === 'cas3') score = 15;
      else if(cas === 'cas4') score = 20;
      else if(cas === 'cas5') score = 1;
      _.forEach(this.colorBackground[cas], (key, pos) => {
        if(key) {
          nbBlock++;
          if(nbBlock < 5){
            console.log('score : ', score)
            this.scores.total += score;
          }
          else{
            this.scores.total = 0;
            this.errorMessageBlock = 'Attention vous avez mis plus de 4 Blocks. Veuillez vérifier les points.'
          }
        }
      })
    })
    console.log('this.scores.total : ', this.scores.total)
  }

  reset(){
    this.init();
  }

}
