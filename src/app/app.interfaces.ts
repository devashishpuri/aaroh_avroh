export interface Alankar {
    aaroh: Array<Array<string>>;
    avroh: Array<Array<string>>;
}

export interface AlankarPhrase {
    phrase: string[];
    rootSwara: string;
    lastSwara: string;
}

export interface SavedAlankar extends AlankarPhrase {
    id: number;
    title: string;
    date: number;
}

