import { Component, OnInit } from '@angular/core';
import { IonToggle } from '@ionic/angular';
import { StorageService, StoragePreference } from '../_shared';
import { Thaat, getThaatObj, ROOT_SWARAS, LAST_SWARAS, THAATS } from '../app.structs';
import { KeyValue } from '@angular/common';
import { DefaultConfig } from '../app.interfaces';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  // ####| Template helpers |####
  rootSwaras = ROOT_SWARAS;
  lastSwaras = LAST_SWARAS;
  thaats = THAATS;

  // Settings
  defaultConf: DefaultConfig = {
    rootSwara: ROOT_SWARAS[0],
    lastSwara: LAST_SWARAS[0],
    thaat: Thaat.Bilaval,
  }

  // Dark Mode Settings
  isDarkMode;

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  constructor(private storage: StorageService) {
    this.getDeviceDarkMode();
    this.getDefaultConf();
    this.prefersDark.addEventListener('change', this.getDeviceDarkMode.bind(this));
  }

  ngOnInit() { }

  private async getDefaultConf() {
    const conf = await this.storage.getPreference(StoragePreference.DefaultConfig);
    if (conf) {
      this.defaultConf = conf;
    }
  }

  private async getDeviceDarkMode() {
    this.isDarkMode = this.prefersDark.matches || document.body.classList.contains('dark');
    // Check user preference
    const darkModePref = await this.storage.getPreference(StoragePreference.DarkMode);
    if (darkModePref != undefined || darkModePref != null) {
      this.isDarkMode = darkModePref;
    }
  }

  toggle(event) {
    // document.body.classList.toggle('dark', event.checked);
    if (event.detail.checked) {
      document.body.classList.add('dark');
      this.storage.savePreference(StoragePreference.DarkMode, true);
    } else {
      document.body.classList.remove('dark');
      this.storage.savePreference(StoragePreference.DarkMode, false);
    }
  }

  onConfChange() {
    this.storage.savePreference(StoragePreference.DefaultConfig, this.defaultConf);
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

}
