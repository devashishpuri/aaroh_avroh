import { Thaat } from './app.structs';

export interface ThaatSwara {
    swaraSelection: string[];
    swaras: string[];
}

export interface Alankar {
    aaroh: Array<Array<string>>;
    avroh: Array<Array<string>>;
}

export interface AlankarPhrase {
    phrase: string[];
    rootSwara: string;
    lastSwara: string;
    thaat?: Thaat;
    vargitSwaras?: string[];
}

export interface SavedAlankar extends AlankarPhrase {
    id?: string;
    title: string;
    date: number;
}

