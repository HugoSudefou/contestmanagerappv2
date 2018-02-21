import {Component, EventEmitter, Output} from '@angular/core';
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
  @Output() notifyScorM2: EventEmitter<number> = new EventEmitter<number>();

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
  asErrorMessage: String;
  nbBlock: number;

  constructor() {
    this.init()
  }

  init(){
    this.errorMessageBlock = '';
    this.asErrorMessage = null;
    this.nbBlock = 0;
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
    let beforKey;
    let moreThanFourClic = false;
    if(position !== 'four'){
      if(this.nbBlock < 4){
        _.forEach(this.colorBackground, (key, cas) => {
          beforKey = false;
          console.log(cas + '-----');
          _.forEach(this.colorBackground[cas], (key, pos) => {
            if (!key){
              if (!beforKey && (this.nbBlock === 3 || this.nbBlock === 2) && position === 'third' && cas === nCas) moreThanFourClic = true;
              if (!beforKey && this.nbBlock === 3 && position === 'second' && cas === nCas) moreThanFourClic = true;
            }
            beforKey = (beforKey === false) ? key : true;
          })
        });
      }
      else if(this.nbBlock >= 4) moreThanFourClic = true;
    }

    if (!moreThanFourClic && !this.colorBackground[nCas][position]) {
      if(position === 'four'){
        let change: boolean = false;
        _.forEachRight(this.colorBackground, (dataPos, cas)=>{
          if(cas === nCas) change = true;
          else  change = false;
          _.forEach(dataPos, (pos, key)=>{
            if(change) this.colorBackground[cas][key] = true;
            else this.colorBackground[cas][key] = false;
          })
        })
      }
      else if(position === 'third'){
        let change: boolean = false;
        _.forEachRight(this.colorBackground, (dataPos, cas)=>{
          if(cas === nCas) change = true;
          else  change = false;
          _.forEach(dataPos, (pos, key)=>{
            if(change) this.colorBackground[cas][key] = (key === 'four') ? false : true;
            else this.colorBackground[cas][key] = (key === 'first' && pos === true) ? true : false;
          })
        })
      }
      else if(position === 'second'){
        let change: boolean = false;
        _.forEachRight(this.colorBackground, (dataPos, cas)=>{
          if(cas === nCas) change = true;
          else change = false;
          _.forEach(dataPos, (pos, key)=>{
            if(change) this.colorBackground[cas][key] = (key === 'four' || key === 'third') ? false : true;
            else this.colorBackground[cas][key] = ((key === 'first' || key === 'second') && pos === true) ? true : false;

          })
        })
      }
      else if(position === 'first'){
        let change: boolean = false;
        _.forEachRight(this.colorBackground, (dataPos, cas)=>{
          if(cas === nCas) change = true;
          else  change = false;
          _.forEach(dataPos, (pos, key)=>{
            if(change) this.colorBackground[cas][key] = (key === 'four' || key === 'third' || key === 'second') ? false : true;
            else this.colorBackground[cas][key] = (key !== 'four' && pos === true) ? true : false;

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
      this.calculScore();
    }
    else if(this.colorBackground[nCas][position]){
      let change: boolean = true;
      _.forEachRight(this.colorBackground[nCas], (pos, key) => {
        if (change) this.colorBackground[nCas][key] = false;
        if (key === position) change = false;
      })
      if (nCas === 'cas3') this.colorBackground.cas4.first = false;
      this.calculScore();
    }
  }

  calculScore(){
    this.errorMessageBlock = '';
    this.asErrorMessage = null;
    let score = 0;
    this.scores.total = 0;
    this.nbBlock = 0;
    _.forEach(this.colorBackground, (key, cas) => {
      if(cas === 'cas1') score = 1;
      else if(cas === 'cas2') score = 3;
      else if(cas === 'cas3') score = 2;
      else if(cas === 'cas4') score = 10;
      _.forEach(this.colorBackground[cas], (key, pos) => {
        if(key) {
          this.nbBlock++;
          if(this.nbBlock < 5){
            console.log('score : ', score)
            this.scores.total += score;
          }
          else{
            this.scores.total = 0;
            this.errorMessageBlock = 'Attention vous avez mis plus de 4 Blocks. Veuillez vérifier les points.';
            this.asErrorMessage = '#FFD900';
          }
        }
      })
    })
    this.pushScore();
    console.log('this.scores.total : ', this.scores.total)
  }

  reset(){
    this.init();
  }

  pushScore() :void{
    this.notifyScorM2.emit(this.scores.total);
  }

}
