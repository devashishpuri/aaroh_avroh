import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';
const { StatusBar, SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  // Set Theming
  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Saved Alankars',
      url: '/saved',
      icon: 'save'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Contact Us',
      url: '/request',
      icon: 'mail'
    },
  ];

  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.getDeviceDarkMode();
    this.prefersDark.addEventListener('change', this.getDeviceDarkMode.bind(this));

  }

  initializeApp() {
    this.platform.ready().then(async () => {
      try {
        await StatusBar.setStyle({ style: StatusBarStyle.Dark });
        await StatusBar.setBackgroundColor({ color: '#EA4E95' });
      } catch (_) {
        console.warn(_);
      }

      try {
        await SplashScreen.hide();
      } catch (_) {
        console.warn(_)
      }
    });
  }

  ngOnInit() { }

  private getDeviceDarkMode() {
    // document.body.classList.toggle('dark', this.prefersDark.matches);
    if (this.prefersDark.matches) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
