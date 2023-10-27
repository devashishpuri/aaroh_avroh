import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService, StoragePreference } from '../_shared';
import { NavigationExtras, Router } from '@angular/router';
import { AlankarPhrase, DefaultConfig } from '../app.interfaces';
import { THAAT_SWARAS, Thaat, ROOT_SWARAS, LAST_SWARAS, THAATS } from '../app.structs';
import { KeyValue } from '@angular/common';
import { IonContent, IonTextarea, Platform, SelectChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('phrase', { static: false }) phrase?: IonTextarea;
  @ViewChild('content') content?: IonContent;

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
  mandraSaptak?: string[];
  madhaSaptak?: string[];
  fluteSwaras: string[];
  showAllSwaras = false;

  // Varjit Swara
  vargitSwaras: string[] = [];

  // Result
  private result: string[] = [];

  resultPhrase?: string | null;

  constructor(
    private router: Router,
    private storage: StorageService,
    private platform: Platform
  ) {
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

  onThaatChange(event: any) {
    this.fluteSwaras = THAAT_SWARAS[event.target.value].swaraSelection;
  }

  addSwara(swara: string) {
    if (this.isVargit(swara)) {
      return;
    }
    this.result.push(swara);
    this.resultPhrase = this.result.join(', ');
    // Highlight Result
    this.highlightTextArea = true;
    setTimeout(() => {
      this.highlightTextArea = false;
    }, 300);
  }

  onPress(swara: string) {
    const index = this.vargitSwaras.indexOf(swara);
    if (!this.platform.is("ios")) {
      window.navigator.vibrate(50);
    }
    if (index === -1) {
      this.vargitSwaras.push(swara);
      this.result = this.result.filter(v => v != swara);
    } else {
      this.vargitSwaras.splice(index, 1);
    }
  }

  isVargit(swara: string) {
    return this.vargitSwaras.indexOf(swara) !== -1;
  }

  // get resultPhrase() {
  //   return this.result.join(', ');
  // }

  clearResult() {
    this.result = [];
    this.resultPhrase = null;
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
            vargitSwaras: this.vargitSwaras
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

  textChange(event: any) {
    if (event.detail.inputType === 'insertLineBreak') {
      // Hide Keyboard
      (document.activeElement as any).blur();
    }

    const key = event.detail.data;
    let val: string = event.srcElement?.value;
    val = val?.replace(/(\d+|\n)/, '');
    val = val.replace(key, '');
    this.result = val?.split(', ').filter(v => v);
    this.resultPhrase = this.result.join(', ');
    this.phrase!.value = this.resultPhrase;
  }

  onKeyboardOpen() {
    setTimeout(() => {
      window.scrollTo({ top: 128 });
      this.content?.scrollToBottom();
    }, 300);
  }

}
