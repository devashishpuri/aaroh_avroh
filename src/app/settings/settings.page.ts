import { Component, OnInit } from '@angular/core';
import { StorageService, StoragePreference } from '../_shared';
import { Thaat, ROOT_SWARAS, LAST_SWARAS, THAATS } from '../app.structs';
import { KeyValue } from '@angular/common';
import { DefaultConfig } from '../app.interfaces';

import { ToggleCustomEvent } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';

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
  isDarkMode?: boolean;

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

  toggle(event: ToggleCustomEvent) {
    // document.body.classList.toggle('dark', event.checked);
    if (event.detail.checked) {
      document.body.classList.add('dark');
      this.storage.savePreference(StoragePreference.DarkMode, true);
      this.setStatusBarTheme(true);
    } else {
      document.body.classList.remove('dark');
      this.storage.savePreference(StoragePreference.DarkMode, false);
      this.setStatusBarTheme(false);
    }
  }

  private async setStatusBarTheme(isDarkTheme = false) {
    try {
      if (isDarkTheme) {
        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: '#202020' });
      } else {
        await StatusBar.setStyle({ style: Style.Light });
        await StatusBar.setBackgroundColor({ color: '#ffffff' });
      }
    } catch (_) {
      console.warn(_);
    }
  }

  onConfChange() {
    this.storage.savePreference(StoragePreference.DefaultConfig, this.defaultConf);
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

}
