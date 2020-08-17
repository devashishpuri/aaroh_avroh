import { Component, OnInit } from '@angular/core';
import { AlankarService } from '../_shared';
import { NavigationExtras, Router } from '@angular/router';
import { AlankarPhrase } from '../app.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  rootSwaras: string[] = ['Sa', 'pa'];
  lastSwaras: string[] = ['Sa\'', 'Pa\''];

  // ####| Template helpers |####
  // Settings
  selectedRootSwara: string = this.rootSwaras[0];
  selectedLastSwara: string = this.lastSwaras[0];
  highlightTextArea = false;
  // Swaras for Selection
  mandraSaptak: string[];
  madhaSaptak: string[];
  fluteSwaras: string[];
  showAllSwaras = false;
  // Result
  private result: string[] = [];

  constructor(private alankarService: AlankarService, private router: Router) {
    this.mandraSaptak = this.alankarService.mandraSaptak;
    this.madhaSaptak = this.alankarService.madhyaSaptak;
    this.fluteSwaras = this.alankarService.fluteSwaras;
  }

  ngOnInit() {
  }

  addSwara(swara: string) {
    this.result.push(swara);
    // Highlight Result
    this.highlightTextArea = true;
    setTimeout(() => {
      this.highlightTextArea = false;
    }, 700);
  }

  get resultPhrase() {
    return this.result.join(', ');
  }

  clearResult() {
    this.result = [];
    this.selectedRootSwara = this.rootSwaras[0];
    this.selectedLastSwara = this.lastSwaras[0];
  }

  async preview() {
    if (this.result.length) {
      let navigationExtras: NavigationExtras = {
        state: {
          alankarPhrase: {
            rootSwara: this.selectedRootSwara,
            lastSwara: this.selectedLastSwara,
            phrase: this.result
          } as AlankarPhrase
        }
      };
      await this.router.navigate(['preview'], navigationExtras);
      this.clearResult();
    }
  }

}
