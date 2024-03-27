import { PlayListEntry } from './PlayListEntry';
export declare class SongInfoEntry extends PlayListEntry {
    private _data;
    constructor(id: number, length: number, name: string, creator: string, data: string);
    get data(): string;
}
