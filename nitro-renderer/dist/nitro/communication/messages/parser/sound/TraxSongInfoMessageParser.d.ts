import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { SongInfoEntry } from './SongInfoEntry';
export declare class TraxSongInfoMessageParser implements IMessageParser {
    private _songs;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get songs(): SongInfoEntry[];
}
