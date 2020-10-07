import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

import { AlankarPhrase, SavedAlankar } from '../app.interfaces';
import { AlankarService, StorageService } from '../_shared';
import { AlertController, NavController } from '@ionic/angular';

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
    this.route.queryParams.subscribe(_ => {
      if (this.router.getCurrentNavigation().extras.state) {
        const alreadySaved = this.router.getCurrentNavigation().extras.state.saved;
        this.alreadySaved = alreadySaved || false;
        this.alankar = this.router.getCurrentNavigation().extras.state.alankarPhrase;
        this.title = alreadySaved ? this.alankar.title : this.alankar.phrase.join(", ");
        this.preparePhrases();
      } else {
        this.router.navigate(['/home']);
      }
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
    Share.share({
      title: this.alreadySaved ? this.alankar.title : phrase,
      text: 'View this alankar on the Alankar app',
      url: 'https://devashishpuri.github.io/aaroh_avroh/',
      dialogTitle: this.alreadySaved ? this.alankar.title : phrase
    });
  }

  async save() {
    const phrase = this.alankar.phrase.join(', ');
    const name = await this.getTitle();
    await this.storageService.saveAlankar({
      ...this.alankar,
      title: name || phrase,
      date: new Date().getTime()
    });
    this.nav.navigateRoot('/saved');
  }

  private async getTitle() {
    const alert = await this.alertController.create({
      cssClass: 'alankar-title',
      header: 'Alankar Name',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Name your Alankar'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Save',
          handler: () => { }
        }
      ]
    });
    await alert.present();
    return (await alert.onDidDismiss()).data.values.title;
  }

  // getText(phrases: Array<Array<string>>) {
  //   const tempPhrases = Object.assign([], phrases);

  //   tempPhrases.forEach(phrase => {
  //     phrase = phrase.join(', ');
  //   });

  //   return tempPhrases.join('\n');
  // }

}
