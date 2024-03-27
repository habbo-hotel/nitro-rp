import { ISongInfo } from '../../../api';
import { PlayListEntry } from '../../communication/messages/parser/sound/PlayListEntry';
export declare class SongDataEntry extends PlayListEntry implements ISongInfo {
    private _songData;
    private _jukeboxDiskId;
    constructor(id: number, length: number, name: string, creator: string, songData?: string);
    get id(): number;
    get length(): number;
    get name(): string;
    get creator(): string;
    get songData(): string;
    set songData(k: string);
    get diskId(): number;
    set diskId(k: number);
}
