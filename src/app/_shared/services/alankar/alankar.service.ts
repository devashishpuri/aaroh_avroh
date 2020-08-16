import { Injectable } from '@angular/core';
import { Alankar } from 'src/app/app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlankarService {

  mandraSaptak = ['sa', 're', 'ga', 'ma', 'pa', 'dha', 'ni'];
  madhyaSaptak = [
    'Sa',
    'Re',
    'Ga',
    'Ma',
    'Pa',
    'Dha',
    'Ni',
  ];
  taarSaptak = ['Sa\'', 'Re\'', 'Ga\'', 'Ma\'', 'Pa\'', 'Dha\'', 'Ni\''];

  swaras = [...this.mandraSaptak, ...this.madhyaSaptak, ...this.taarSaptak];
  fluteSwaras = ['pa', 'dha', 'ni', ...this.madhyaSaptak];

  constructor() { }

  getAlankar(basePhrase: string[], rootSwara: string, lastSwara: string, customSwaras?: string[]) {
    return {
      aaroh: this.getAaroh(basePhrase, rootSwara, lastSwara),
      avroh: this.getAvroh(basePhrase, rootSwara, lastSwara)
    } as Alankar;
  }

  getAaroh(basePhrase: string[], root: string, range: string, customSwaras?: string[]) {
    const swaras = customSwaras || this.swaras;
    let phrases: Array<Array<string>> = [];
    let lastSwara: string;
    for (let i = 0; lastSwara != range; i++) {
      const phrase: string[] = [];
      // Assumption: Should start with Sa
      // List<int> difference = [];
      basePhrase.forEach((element) => {
        // const rootIndex = swaras.indexOf(root);
        const elementPosition = swaras.indexOf(element);
        const phraseSwaraPosition = elementPosition + i;
        if (phraseSwaraPosition > swaras.length - 1) {
          throw 'Invalid Alankar, Out of range';
        }
        phrase.push(swaras[phraseSwaraPosition]);
      });
      lastSwara = phrase[basePhrase.length - 1];
      phrases.push(phrase);
    }
    return phrases;
  }

  getAvroh(basePhrase: string[], root: string, range: string, customSwaras?: string[]) {
    const swaras = customSwaras || this.swaras;
    // Construct base phrase for avroh
    const swaraDifference: number[] = [];
    basePhrase.forEach((element) => {
      const rootPosition = swaras.indexOf(root);
      const elementPosition = swaras.indexOf(element);
      const difference = elementPosition - rootPosition;
      swaraDifference.push(difference);
    });

    const avrohBasePhrase: string[] = [];
    swaraDifference.forEach((difference) => {
      const lastSwaraPosition = swaras.indexOf(range);
      avrohBasePhrase.push(swaras[lastSwaraPosition - difference]);
    });

    let phrases: Array<Array<string>> = [];
    let lastSwara: string;
    for (let i = 0; lastSwara != root; i++) {
      const phrase: string[] = [];

      avrohBasePhrase.forEach((element) => {
        // const rootIndex = swaras.indexOf(root);
        const elementPosition = swaras.indexOf(element);
        const phraseSwaraPosition = elementPosition - i;
        if (phraseSwaraPosition < 0) {
          throw 'Invalid Alankar, Out of range';
        }
        phrase.push(swaras[phraseSwaraPosition]);
      });
      lastSwara = phrase[avrohBasePhrase.length - 1];
      phrases.push(phrase);
    }
    return phrases;
  }

}
