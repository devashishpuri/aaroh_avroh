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
    this.getDeviceDarkMode();
    this.prefersDark.addEventListener('change', this.getDeviceDarkMode.bind(this));
  }

  ngOnInit() { }

  private getDeviceDarkMode() {
    this.isDarkMode = this.prefersDark.matches || document.body.classList.contains('dark');
  }

  toggle(event) {
    // document.body.classList.toggle('dark', event.checked);
    if (event.detail.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

}
