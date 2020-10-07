import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';
import { Router, NavigationEnd, NavigationCancel } from '@angular/router';
import { StorageService, StoragePreference } from './_shared';
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
    private router: Router,
    private storage: StorageService
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.getDeviceDarkMode();
    this.prefersDark.addEventListener('change', this.getDeviceDarkMode.bind(this));

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd || NavigationCancel) {
          this.checkRouteSelection();
        }
      })
  }

  private checkRouteSelection() {
    this.selectedIndex = -1;
    this.appPages.forEach((page, index) => {
      if (window.location.pathname.indexOf(page.url) !== -1) {
        this.selectedIndex = index;
        return;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      try {
        // await StatusBar.setStyle({ style: StatusBarStyle.Dark });
        // await StatusBar.setBackgroundColor({ color: '#EA4E95' });
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

  private setStatusBarTheme(isDarkTheme = false) {
    this.platform.ready().then(async () => {
      try {
        if (isDarkTheme) {
          await StatusBar.setStyle({ style: StatusBarStyle.Dark });
          // await StatusBar.setBackgroundColor({ color: '#EA4E95' });
        } else {
          await StatusBar.setStyle({ style: StatusBarStyle.Light });
        }
      } catch (_) {
        console.warn(_);
      }
    });
  }

  private async getDeviceDarkMode() {
    // document.body.classList.toggle('dark', this.prefersDark.matches);
    const darkModePref = await this.storage.getPreference(StoragePreference.DarkMode);
    if (darkModePref != undefined || darkModePref != null) {
      if (darkModePref) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      return;
    }
    if (this.prefersDark.matches) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
