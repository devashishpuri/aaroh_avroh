import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavedAlankar } from '../app.interfaces';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  alankars: SavedAlankar[] = [
    {
      id: 1,
      title: 'Jump Alankar',
      phrase: ['Sa', 'Ga', 'Re', 'Ma'],
      date: 1597489448000,
      rootSwara: 'Sa',
      lastSwara: 'Sa\''
    },
    {
      id: 2,
      title: 'Jump Alankar',
      phrase: ['Sa', 'Ga', 'Re', 'Ma'],
      date: 1597489448000,
      rootSwara: 'Sa',
      lastSwara: 'Sa\''
    },
    {
      id: 3,
      title: 'Jump Alankar',
      phrase: ['Sa', 'Ga', 'Re', 'Ma'],
      date: 1597489448000,
      rootSwara: 'Sa',
      lastSwara: 'Sa\''
    },
    {
      id: 4,
      title: 'Jump Alankar',
      phrase: ['Sa', 'Ga', 'Re', 'Ma'],
      date: 1597489448000,
      rootSwara: 'Sa',
      lastSwara: 'Sa\''
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  preview(alankar: SavedAlankar) {
    this.router.navigate(['/preview']);
  }

  remove(event: Event, alankar: SavedAlankar) {
    event.stopPropagation();
    console.log('Removing Alankar');
  }

  getDescription(phrase: string[]) {
    return  phrase.join(', ');
  }

}
