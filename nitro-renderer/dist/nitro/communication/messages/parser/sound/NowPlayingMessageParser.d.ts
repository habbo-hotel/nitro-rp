import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class NowPlayingMessageParser implements IMessageParser {
    private _currentSongId;
    private _currentPosition;
    private _nextSongId;
    private _nextPosition;
    private _syncCount;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get currentSongId(): number;
    get currentPosition(): number;
    get nextSongId(): number;
    get nextPosition(): number;
    get syncCount(): number;
}
