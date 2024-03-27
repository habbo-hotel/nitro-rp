import { IAdvancedMap, IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class JukeboxSongDisksMessageParser implements IMessageParser {
    private _songDisks;
    private _maxLength;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get songDisks(): IAdvancedMap<number, number>;
    get maxLength(): number;
}
