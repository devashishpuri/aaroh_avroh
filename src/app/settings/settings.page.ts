import { Component, OnInit } from '@angular/core';
import { IonToggle } from '@ionic/angular';
import { StorageService, StoragePreference } from '../_shared';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  isDarkMode;

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  constructor(private storage: StorageService) {
    this.getDeviceDarkMode();
    this.prefersDark.addEventListener('change', this.getDeviceDarkMode.bind(this));
  }

  ngOnInit() { }

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

}
