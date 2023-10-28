import { Component, OnInit, NgZone } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { Router, NavigationEnd, NavigationCancel, ActivatedRoute } from '@angular/router';
import { StorageService, StoragePreference } from './_shared';
import { SplashScreen } from '@capacitor/splash-screen';
import { App } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Storage } from '@ionic/storage-angular';

import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

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
    private route: ActivatedRoute,
    private storage: StorageService,
    private localStorage: Storage,
    public toastController: ToastController,
    private zone: NgZone
  ) {

    this.redirectToAppIfInstalled();
    if (!this.platform.is("hybrid")) {
      this.openPreviewIfParams();
    }
    this.initializeApp();
    this.prefersDark.addEventListener('change', this.getDeviceDarkMode.bind(this));

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd || NavigationCancel) {
          this.checkRouteSelection();
        }
      })
  }

  private redirectToAppIfInstalled() {
    if (!this.platform.is("hybrid")) {
      console.log('Not Hybrid, redirecting to deeplink');
      try {
        const url = window.location.href.split('home').pop();
        if (url && url.indexOf('phrase') !== -1) {
          const deeplink = `app://com.deviation.aaroh_avroh/preview${url}`;
          window.location.href = deeplink;
        }
      } catch (_) {
        console.warn(_);
      }
    }
  }

  private openPreviewIfParams() {
    this.route.queryParams.subscribe(params => {
      if (params['phrase']) {
        const slug = window.location.href.split("home").pop();
        if (slug && slug.indexOf('phrase') !== -1) {
          this.router.navigateByUrl(`/preview${slug}`);
        }
      }
    });
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
    App.addListener('appUrlOpen', (data: any) => {
      this.zone.run(() => {
        // url: https://devashishpuri.github.io/aaroh_avroh/preview
        // slug = /preview?<xyz>
        const slug = data.url.split("aaroh_avroh").pop();
        if (slug && slug.indexOf('preview') !== -1) {
          setTimeout(() => {
            this.router.navigateByUrl(slug);
          }, 500);
        }
        // If no match, do nothing - let regular routing 
        // logic take over
      });
    });

    this.platform.ready().then(async () => {
      if (
        !this.platform.is("pwa") &&
        !this.platform.is("hybrid") &&
        !this.platform.is("desktop")
      ) {
        const toast = await this.toastController.create({
          animated: true,
          header: 'Download the app for better experience',
          // duration: 3000,
          buttons: [
            {
              side: 'end',
              text: 'Download',
              handler: () => {
                window.open('https://play.google.com/store/apps/details?id=com.deviation.aaroh_avroh&hl=en_US', '_blank');
              }
            },
            {
              side: 'end',
              role: 'cancel',
              icon: 'close'
            }
          ]
        });

        setTimeout(() => {
          toast.present();
        }, 2000);
      }

      try {
        await SplashScreen.hide();
      } catch (_) {
        console.warn(_)
      }
    });
  }

  async ngOnInit() {
    await this.localStorage.defineDriver(CordovaSQLiteDriver);
    await this.localStorage.create();
    this.getDeviceDarkMode();
  }

  private setStatusBarTheme(isDarkTheme = false) {
    this.platform.ready().then(async () => {
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
    });
  }

  private async getDeviceDarkMode() {
    // document.body.classList.toggle('dark', this.prefersDark.matches);
    const darkModePref = await this.storage.getPreference(StoragePreference.DarkMode);
    if (darkModePref != undefined || darkModePref != null) {
      if (darkModePref) {
        this.setTheme(true);
      } else {
        this.setTheme(false);
      }
      return;
    }
    if (this.prefersDark.matches) {
      this.setTheme(true);
    } else {
      this.setTheme(false);
    }
  }

  private setTheme(isDark: boolean) {
    if (isDark) {
      document.body.classList.add('dark');
      this.setStatusBarTheme(true);
    } else {
      document.body.classList.remove('dark');
      this.setStatusBarTheme(false);
    }

  }
}
