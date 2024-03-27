import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class YouArePlayingGameParser implements IMessageParser {
    private _isPlaying;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get isPlaying(): boolean;
}
