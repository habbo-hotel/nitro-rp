import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class YoutubeControlVideoMessageParser implements IMessageParser {
    private _furniId;
    private _commandId;
    parse(wrapper: IMessageDataWrapper): boolean;
    flush(): boolean;
    get furniId(): number;
    get commandId(): number;
}
