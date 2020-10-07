import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SavedAlankar } from '../app.interfaces';
import { StorageService } from '../_shared';
import { Plugins } from '@capacitor/core';

const { Share } = Plugins;

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  alankars: SavedAlankar[] = []

  constructor(private router: Router, private storage: StorageService) {
    this.fetchAlankars();
  }

  ngOnInit() { }

  private async fetchAlankars() {
    this.alankars = await this.storage.getSavedAlankars();
  }

  async preview(alankar: SavedAlankar) {
    let navigationExtras: NavigationExtras = {
      state: {
        alankarPhrase: alankar,
        saved: true
      }
    };
    await this.router.navigate(['preview'], navigationExtras);
  }

  async remove(event: Event, alankar: SavedAlankar) {
    event.stopPropagation();
    await this.storage.deleteAlankar(alankar.id);
    const index = this.alankars.indexOf(alankar);
    this.alankars.splice(index, 1);
  }

  share(event: Event, alankar: SavedAlankar) {
    event.stopPropagation();
    Share.share({
      title: alankar.title,
      text: 'View this alankar on the Alankar app',
      url: `https://devashishpuri.github.io/aaroh_avroh/preview/?phrase=${alankar.phrase}&thaat=${alankar.thaat}&rootSwara=${alankar.rootSwara}&lastSwara=${alankar.lastSwara}&title=${alankar.title}`,
      dialogTitle: alankar.title
    });
  }

  getDescription(phrase: string[]) {
    return phrase.join(', ');
  }

}
