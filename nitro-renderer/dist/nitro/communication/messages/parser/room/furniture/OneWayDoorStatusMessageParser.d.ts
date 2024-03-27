import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class OneWayDoorStatusMessageParser implements IMessageParser {
    private _itemId;
    private _state;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get itemId(): number;
    get state(): number;
}
