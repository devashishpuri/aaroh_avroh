import { Injectable } from '@angular/core';
import { SavedAlankar } from 'src/app/app.interfaces';

import { Storage } from '@ionic/storage';

import * as uuid from 'uuid';

export enum StoragePreference {
  DarkMode = 'darkMode'
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  savePreference(prefType: StoragePreference, value: any) {
    return this.storage.set(prefType, JSON.stringify(value));
  }

  async getPreference(prefType: StoragePreference) {
    return JSON.parse(await this.storage.get(prefType));
  }

  saveAlankar(alankar: SavedAlankar): Promise<any> {
    alankar.id = uuid.v4();
    return this.storage.set(alankar.id, JSON.stringify(alankar));
  }

  async getSavedAlankars(): Promise<SavedAlankar[]> {
    const savedAlankars = [];
    const prefrences = Object.values(StoragePreference);
    await this.storage.forEach((alankar, key) => {
      if (!prefrences.includes(key as StoragePreference)) {
        savedAlankars.push(JSON.parse(alankar));
      }
    });
    return savedAlankars.sort((a: SavedAlankar, b: SavedAlankar) => b.date - a.date);
  }

  deleteAlankar(id: string): Promise<any> {
    return this.storage.remove(id);
  }

}
