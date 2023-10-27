import { ThaatSwara } from './app.interfaces';

export enum Thaat {
    Bilaval,
    Kalyan,
    Khamaj,
    Bhairav,
    Kafi,
    Asavari,
    Bhairavi,
    Poorvi,
    Marva,
    Todi
}

export const ROOT_SWARAS: string[] = ['S', 'P̣'];
export const LAST_SWARAS: string[] = ['Ṡ', 'Ṗ'];
export const THAATS = getThaatObj() as any;

export const THAAT_SWARAS: ThaatSwara[] = [
    // Bilaval
    {
        swaraSelection: ['P̣', 'Ḍ', 'Ṇ', 'S', 'R', 'G', 'M', 'P', 'D', 'N'],
        swaras: ['Ṣ', 'Ṛ', 'G̣', 'Ṃ', 'P̣', 'Ḍ', 'Ṇ', 'S', 'R', 'G', 'M', 'P', 'D', 'N', 'Ṡ', 'Ṙ', 'Ġ', 'Ṁ', 'Ṗ', 'Ḋ', 'Ṅ']
    },
    // Kalyan
    {
        swaraSelection: ['P̣', 'Ḍ', 'Ṇ', 'S', 'R', 'G', 'M\'', 'P', 'D', 'N'],
        swaras: ['Ṣ', 'Ṛ', 'G̣', 'Ṃ\'', 'P̣', 'Ḍ', 'Ṇ', 'S', 'R', 'G', 'M\'', 'P', 'D', 'N', 'Ṡ', 'Ṙ', 'Ġ', 'Ṁ\'', 'Ṗ', 'Ḋ', 'Ṅ']
    },
    // Khamaj
    {
        swaraSelection: ['P̣', 'Ḍ', 'ṇ', 'S', 'R', 'G', 'M', 'P', 'D', 'n'],
        swaras: ['Ṣ', 'Ṛ', 'G̣', 'Ṃ', 'P̣', 'Ḍ', 'ṇ', 'S', 'R', 'G', 'M', 'P', 'D', 'n', 'Ṡ', 'Ṙ', 'Ġ', 'Ṁ', 'Ṗ', 'Ḋ', 'ṅ']
    },
    // Bhairav
    {
        swaraSelection: ['P̣', 'ḍ', 'Ṇ', 'S', 'r', 'G', 'M', 'P', 'd', 'N'],
        swaras: ['Ṣ', 'ṛ', 'G̣', 'Ṃ', 'P̣', 'ḍ', 'Ṇ', 'S', 'r', 'G', 'M', 'P', 'd', 'N', 'Ṡ', 'ṙ', 'Ġ', 'Ṁ', 'Ṗ', 'ḋ', 'Ṅ']
    },
    // Kafi
    {
        swaraSelection: ['P̣', 'Ḍ', 'ṇ', 'S', 'R', 'g', 'M', 'P', 'D', 'n'],
        swaras: ['Ṣ', 'Ṛ', 'g̣', 'Ṃ', 'P̣', 'Ḍ', 'ṇ', 'S', 'R', 'g', 'M', 'P', 'D', 'n', 'Ṡ', 'Ṙ', 'ġ', 'Ṁ', 'Ṗ', 'Ḋ', 'ṅ']
    },
    // Asavari
    {
        swaraSelection: ['P̣', 'ḍ', 'ṇ', 'S', 'R', 'g', 'M', 'P', 'd', 'n'],
        swaras: ['Ṣ', 'Ṛ', 'g̣', 'Ṃ', 'P̣', 'ḍ', 'ṇ', 'S', 'R', 'g', 'M', 'P', 'd', 'n', 'Ṡ', 'Ṙ', 'ġ', 'Ṁ', 'Ṗ', 'ḋ', 'ṅ']
    },
    // Bhairavi
    {
        swaraSelection: ['P̣', 'ḍ', 'ṇ', 'S', 'r', 'g', 'M', 'P', 'd', 'n'],
        swaras: ['Ṣ', 'ṛ', 'g̣', 'Ṃ', 'P̣', 'ḍ', 'ṇ', 'S', 'r', 'g', 'M', 'P', 'd', 'n', 'Ṡ', 'ġ', 'ṙ', 'ġ', 'Ṁ', 'Ṗ', 'ḋ', 'ṅ']
    },
    // 	Poorvi
    {
        swaraSelection: ['P̣', 'ḍ', 'Ṇ', 'S', 'r', 'G', 'M\'', 'P', 'd', 'N'],
        swaras: ['Ṣ', 'ṛ', 'G̣', 'Ṃ\'', 'P̣', 'ḍ', 'Ṇ', 'S', 'r', 'G', 'M\'', 'P', 'd', 'N', 'Ṡ', 'ṙ', 'Ġ', 'Ṁ\'', 'Ṗ', 'ḋ', 'Ṅ']
    },
    // Marva
    {
        swaraSelection: ['P̣', 'Ḍ', 'Ṇ', 'S', 'r', 'G', 'M\'', 'P', 'd', 'N'],
        swaras: ['Ṣ', 'ṛ', 'G̣', 'Ṃ\'', 'P̣', 'Ḍ', 'Ṇ', 'S', 'r', 'G', 'M\'', 'P', 'D', 'N', 'Ṡ', 'ṙ', 'Ġ', 'Ṁ\'', 'Ṗ', 'Ḋ', 'Ṅ']
    },
    // 	Poorvi
    {
        swaraSelection: ['P̣', 'ḍ', 'Ṇ', 'S', 'r', 'g', 'M\'', 'P', 'd', 'N'],
        swaras: ['Ṣ', 'ṛ', 'g̣', 'Ṃ\'', 'P̣', 'ḍ', 'Ṇ', 'S', 'r', 'g', 'M\'', 'P', 'd', 'N', 'Ṡ', 'ṙ', 'ġ', 'Ṁ\'', 'Ṗ', 'ḋ', 'Ṅ']
    }
]

export const SWARAS = THAAT_SWARAS[Thaat.Bilaval].swaras;

export function getThaatObj(): { [key: string]: Thaat } {
    const keys = Object.keys(Thaat).filter(e => !isFinite(+e));
    const thaatObj = {} as any;
    keys.forEach((key: string) => {
        thaatObj[key] = Thaat[key as any];
    });
    return thaatObj;
}