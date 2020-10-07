import { Component, OnInit } from '@angular/core';
import { AlankarService, StorageService, StoragePreference } from '../_shared';
import { NavigationExtras, Router } from '@angular/router';
import { AlankarPhrase, DefaultConfig } from '../app.interfaces';
import { THAAT_SWARAS, Thaat, ROOT_SWARAS, LAST_SWARAS, THAATS } from '../app.structs';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  rootSwaras = ROOT_SWARAS;
  lastSwaras = LAST_SWARAS;
  thaats = THAATS;

  // ####| Template helpers |####
  // Settings
  selectedRootSwara: string = this.rootSwaras[0];
  selectedLastSwara: string = this.lastSwaras[0];
  selectedThaat: Thaat = Thaat.Bilaval;
  highlightTextArea = false;

  // Swaras for Selection
  mandraSaptak: string[];
  madhaSaptak: string[];
  fluteSwaras: string[];
  showAllSwaras = false;

  // Varjit Swara
  vargitSwaras = [];

  // Result
  private result: string[] = [];

  constructor(private router: Router, private storage: StorageService) {
    // this.mandraSaptak = this.alankarService.mandraSaptak;
    // this.madhaSaptak = this.alankarService.madhyaSaptak;
    // this.fluteSwaras = this.alankarService.fluteSwaras;
    this.fluteSwaras = THAAT_SWARAS[this.selectedThaat].swaraSelection;

    this.getDefaultConf();
  }

  ngOnInit() {
  }

  private async getDefaultConf() {
    const conf: DefaultConfig = await this.storage.getPreference(StoragePreference.DefaultConfig);
    if (conf) {
      this.selectedRootSwara = conf.rootSwara;
      this.selectedLastSwara = conf.lastSwara;
      this.selectedThaat = conf.thaat;
    }
  }

  onThaatChange(event) {
    this.fluteSwaras = THAAT_SWARAS[event.target.value].swaraSelection;
  }

  addSwara(swara: string) {
    this.result.push(swara);
    // Highlight Result
    this.highlightTextArea = true;
    setTimeout(() => {
      this.highlightTextArea = false;
    }, 300);
  }

  onPress(swara: string) {
    const index = this.vargitSwaras.indexOf(swara);
    if (index === -1) {
      this.vargitSwaras.push(swara);
    } else {
      this.vargitSwaras.splice(index, 1);
    }
  }

  isVargit(swara: string) {
    return this.vargitSwaras.indexOf(swara) !== -1;
  }

  get resultPhrase() {
    return this.result.join(', ');
  }

  clearResult() {
    this.result = [];
    this.selectedRootSwara = this.rootSwaras[0];
    this.selectedLastSwara = this.lastSwaras[0];
  }

  async preview() {
    if (this.result.length) {
      let navigationExtras: NavigationExtras = {
        state: {
          alankarPhrase: {
            rootSwara: this.selectedRootSwara,
            lastSwara: this.selectedLastSwara,
            phrase: this.result,
            thaat: this.selectedThaat,
            vargitSwaras: []
          } as AlankarPhrase
        }
      };
      await this.router.navigate(['preview'], navigationExtras);
      this.clearResult();
    }
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

}
