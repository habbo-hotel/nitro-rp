import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { PlayListEntry } from './PlayListEntry';
export declare class PlayListMessageParser implements IMessageParser {
    private _synchronizationCount;
    private _playlist;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get synchronizationCount(): number;
    get playList(): PlayListEntry[];
}
