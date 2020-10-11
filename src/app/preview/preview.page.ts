import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

import { AlankarPhrase, SavedAlankar } from '../app.interfaces';
import { AlankarService, StorageService } from '../_shared';
import { AlertController, NavController } from '@ionic/angular';
import { ROOT_SWARAS, LAST_SWARAS, Thaat } from '../app.structs';

const { Share } = Plugins;

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  title: string;
  alankar: SavedAlankar & AlankarPhrase;
  avroh: Array<Array<string>> = [];
  aaroh: Array<Array<string>> = [];

  alreadySaved = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nav: NavController,
    private alankarService: AlankarService,
    private storageService: StorageService,
    private alertController: AlertController
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        const alreadySaved = this.router.getCurrentNavigation().extras.state.saved;
        this.alreadySaved = alreadySaved || false;
        this.alankar = this.router.getCurrentNavigation().extras.state.alankarPhrase;
      } else if (params.phrase) {
        this.alankar = {
          phrase: (params.phrase as string).split(','),
          rootSwara: params.rootSwara || ROOT_SWARAS[0],
          lastSwara: params.lastSwara || LAST_SWARAS[0],
          thaat: +(params.thaat || Thaat.Bilaval),
          title: params.title,
          vargitSwaras: (params.vargitSwaras as string || "").split(',')
        } as SavedAlankar;
      } else {
        this.router.navigate(['/home']);
        return;
      }
      this.title = this.alankar.title || this.alankar.phrase.join(", ");
      this.preparePhrases();
    });
  }

  ngOnInit() { }

  private preparePhrases() {
    const alankar = this.alankarService.getAlankar(this.alankar.phrase,
      this.alankar.rootSwara,
      this.alankar.lastSwara,
      this.alankar.thaat,
      this.alankar.vargitSwaras);
    this.aaroh = alankar.aaroh;
    this.avroh = alankar.avroh;
  }

  share() {
    const phrase = this.alankar.phrase.join(', ');
    let shareUrl = `https://devashishpuri.github.io/aaroh_avroh/home/?phrase=${this.alankar.phrase}&thaat=${this.alankar.thaat}&rootSwara=${this.alankar.rootSwara}&lastSwara=${this.alankar.lastSwara}`;
    if (this.alankar.title) {
      shareUrl += `&title=${this.alankar.title}`;
    }
    Share.share({
      title: this.alreadySaved ? this.alankar.title : phrase,
      text: 'View this alankar on the Alankar app',
      url: encodeURI(shareUrl),
      dialogTitle: this.alreadySaved ? this.alankar.title : phrase
    });
  }

  async save() {
    const phrase = this.alankar.phrase.join(', ');
    const name = await this.getTitle(this.alankar.title);
    if (name || name === "") {
      await this.storageService.saveAlankar({
        ...this.alankar,
        title: name || phrase,
        date: new Date().getTime()
      });
      this.nav.navigateRoot('/saved');
    }
  }

  private async getTitle(defaultVal?: string) {
    return new Promise<string>(async (resolve, reject) => {
      const alert = await this.alertController.create({
        cssClass: 'alankar-title',
        header: 'Alankar Name',
        inputs: [
          {
            name: 'title',
            type: 'text',
            placeholder: 'Name your Alankar',
            value: defaultVal
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              resolve(null);
            }
          },
          {
            text: 'Save',
            handler: data => {
              alert.dismiss();
              resolve(data.title || "");
            }
          }
        ]
      });
      await alert.present();
      // return (await alert.onDidDismiss()).data.values.title;
    });
  }

  // getText(phrases: Array<Array<string>>) {
  //   const tempPhrases = Object.assign([], phrases);

  //   tempPhrases.forEach(phrase => {
  //     phrase = phrase.join(', ');
  //   });

  //   return tempPhrases.join('\n');
  // }

}
