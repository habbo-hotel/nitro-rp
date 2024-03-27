import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class YoutubeDisplayVideoMessageParser implements IMessageParser {
    private _furniId;
    private _videoId;
    private _startAtSeconds;
    private _endAtSeconds;
    private _state;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get furniId(): number;
    get videoId(): string;
    get state(): number;
    get startAtSeconds(): number;
    get endAtSeconds(): number;
}
