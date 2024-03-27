import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RequestSpamWallPostItMessageParser implements IMessageParser {
    private _itemId;
    private _location;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get itemId(): number;
    get location(): string;
}
