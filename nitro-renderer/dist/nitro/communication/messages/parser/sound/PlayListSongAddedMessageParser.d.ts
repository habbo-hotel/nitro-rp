import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PlayListEntry } from './PlayListEntry';
export declare class PlayListSongAddedMessageParser implements IMessageParser {
    private _entry;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get entry(): PlayListEntry;
}
