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
    this.prefersDark.addListener((e) => {
      this.isDarkMode = e.matches;
    });
  }

  ngOnInit() {
    this.isDarkMode = this.prefersDark.matches;
  }

  toggle(event: IonToggle) {
    document.body.classList.toggle('dark', event.checked);
  }

}
