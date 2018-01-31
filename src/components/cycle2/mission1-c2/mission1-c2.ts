import { Component } from '@angular/core';
import * as _ from 'lodash'

/**
 * Generated class for the Mission1C2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mission1-c2',
  templateUrl: 'mission1-c2.html'
})
export class Mission1C2Component {

  scores: {
    total:number
  };
  colorBackground: {
    cas0:{
      first: boolean,
      second: boolean,
      third: boolean,
      four: boolean,
    },
    cas1:{
      first:boolean,
      second:boolean,
      third:boolean,
      four:boolean,
    },
    cas2:{
      first:boolean,
      second:boolean,
    },
    cas3:{
      first:boolean,
    },
    cas4:{
      first:boolean,
    },
    cas5:{
      first:boolean,
      second:boolean,
      third:boolean,
      four:boolean,
    },
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
      cas0:{
        first: false,
        second: false,
        third: false,
        four: false,
      },
      cas1:{
        first: false,
        second: false,
        third: false,
        four: false,
      },
      cas2:{
        first: false,
        second: false,
      },
      cas3:{
        first: false,
      },
      cas4:{
        first: false,
      },
      cas5:{
        first: false,
        second: false,
        third: false,
        four: false,
      },
    };
  }

  changeColor(position, nCas) {

    if (!this.colorBackground[nCas][position]) {
      if (position === 'four') {
        _.forEachRight(this.colorBackground, (key, cas) => {
          _.forEachRight(this.colorBackground[cas], (key, pos) => {
            if (cas !== nCas) this.colorBackground[cas][pos] = false;
          })
        })
      }
      else if (position === 'third') {
        _.forEachRight(this.colorBackground, (key, cas) => {
          _.forEachRight(this.colorBackground[cas], (key, pos) => {
            if (cas !== nCas && pos !== 'first') this.colorBackground[cas][pos] = false;
          })
        })
        this.colorBackground.cas4.first = false;
        this.colorBackground.cas3.first = false;
        this.colorBackground.cas2.first = false;
        this.colorBackground.cas2.second = false;
      }
      else if (position === 'second') {
        _.forEachRight(this.colorBackground, (key, cas) => {
          _.forEachRight(this.colorBackground[cas], (key, pos) => {
            if (cas !== nCas && (pos === 'third' || pos === 'four')) this.colorBackground[cas][pos] = false;
          })
        })
      }
      else if (position === 'first') {
        _.forEachRight(this.colorBackground, (key, cas) => {
          _.forEachRight(this.colorBackground[cas], (key, pos) => {
            if (cas !== nCas && pos === 'four') this.colorBackground[cas][pos] = false;
          })
        })
      }
      if (nCas === 'cas0') {
        let change: boolean = true;
        _.forEach(this.colorBackground[nCas], (pos, key) => {
          if (change) this.colorBackground[nCas][key] = true;
          if (key === position) change = false;
        })
      }
      else if (nCas === 'cas1') {
        let change: boolean = true;
        _.forEach(this.colorBackground[nCas], (pos, key) => {
          if (change) this.colorBackground[nCas][key] = true;
          if (key === position) change = false;
        })
        if (position !== 'first') this.colorBackground.cas4.first = false;
        if (position !== 'first' && position !== 'second') {
          this.colorBackground.cas4.first = false;
          this.colorBackground.cas3.first = false;
          this.colorBackground.cas2.second = false;
        }
        if (position !== 'first' && position !== 'second' && position !== 'third') {
          this.colorBackground.cas4.first = false;
          this.colorBackground.cas3.first = false;
          this.colorBackground.cas2.first = false;
          this.colorBackground.cas2.second = false;
        }
      }
      else if (nCas === 'cas2') {
        let change: boolean = true;
        _.forEach(this.colorBackground[nCas], (pos, key) => {
          if (change) this.colorBackground[nCas][key] = true;
          if (key === position) change = false;
        })
        if (position === 'first') {
          this.colorBackground.cas4.first = false;
          this.colorBackground.cas3.first = false;
        }
        if (position !== 'first') {
          let change: boolean = true;
          _.forEachRight(this.colorBackground, (key, cas) => {
            _.forEachRight(this.colorBackground[cas], (key, pos) => {
              if (pos === 'third' || pos === 'four') this.colorBackground[cas][pos] = false;
              if (key === position) change = false;
            })
          })
          this.colorBackground.cas4.first = false;
        }
      }
      else if (nCas === 'cas3') {

        _.forEachRight(this.colorBackground, (key, cas) => {
          _.forEach(this.colorBackground[cas], (pos, key) => {
            if (key !== 'first') this.colorBackground[cas][key] = false;
          })
        })
        this.colorBackground.cas3.first = true;
        this.colorBackground.cas2.first = true;
      }
      else if (nCas === 'cas4') {
        this.init();
        this.colorBackground.cas4.first = true;
        this.colorBackground.cas3.first = true;
        this.colorBackground.cas2.first = true;
        this.colorBackground.cas1.first = true;
      }
      else if (nCas === 'cas5') {
        let change: boolean = true;
        _.forEach(this.colorBackground[nCas], (pos, key) => {
          if (change) this.colorBackground[nCas][key] = true;
          if (key === position) change = false;
        })

        if (position !== 'first') this.colorBackground.cas4.first = false;
        if (position !== 'first' && position !== 'second') {
          this.colorBackground.cas4.first = false;
          this.colorBackground.cas3.first = false;
          this.colorBackground.cas2.second = false;
          this.colorBackground.cas2.first = false;
        }
        if (position !== 'first' && position !== 'second' && position !== 'third') {
          this.colorBackground.cas4.first = false;
          this.colorBackground.cas3.first = false;
          this.colorBackground.cas2.first = false;
          this.colorBackground.cas2.second = false;
        }
      }
    }
    else{
      let change: boolean = true;
      _.forEachRight(this.colorBackground[nCas], (pos, key)=>{
        if(change) this.colorBackground[nCas][key] = false;
        if(key === position) change = false;
      })
      if(nCas === 'cas3') this.colorBackground.cas4.first = false;

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
