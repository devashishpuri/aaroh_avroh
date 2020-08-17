import { Component, OnInit } from '@angular/core';
import { IonToggle } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  isDarkMode;

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    this.prefersDark.addEventListener('change', this.getDeviceDarkMode.bind(this));
  }

  ngOnInit() {
    this.getDeviceDarkMode();
  }

  private getDeviceDarkMode() {
    this.isDarkMode = this.prefersDark.matches;
  }

  toggle(event: IonToggle) {
    document.body.classList.toggle('dark', event.checked);
  }

}
