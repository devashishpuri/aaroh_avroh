import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlankarPhrase } from '../app.interfaces';
import { AlankarService } from '../_shared';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  title: string;
  alankar: AlankarPhrase;
  avroh: Array<Array<string>> = [];
  aaroh: Array<Array<string>> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alankarService: AlankarService
  ) {
    this.route.queryParams.subscribe(_ => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.alankar = this.router.getCurrentNavigation().extras.state.alankarPhrase;
        this.title = this.alankar.phrase.join(", ");
        this.preparePhrases();
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
  }

  private preparePhrases() {
    const alankar = this.alankarService.getAlankar(this.alankar.phrase, this.alankar.rootSwara, this.alankar.lastSwara);
    // this.aaroh = this.alankarService.getAaroh(this.alankar.phrase, this.alankar.rootSwara, this.alankar.lastSwara);
    // this.avroh = this.alankarService.getAvroh(this.alankar.phrase, this.alankar.rootSwara, this.alankar.lastSwara);
    this.aaroh = alankar.aaroh;
    this.avroh = alankar.avroh;
  }

  // getText(phrases: Array<Array<string>>) {
  //   const tempPhrases = Object.assign([], phrases);

  //   tempPhrases.forEach(phrase => {
  //     phrase = phrase.join(', ');
  //   });

  //   return tempPhrases.join('\n');
  // }

}
