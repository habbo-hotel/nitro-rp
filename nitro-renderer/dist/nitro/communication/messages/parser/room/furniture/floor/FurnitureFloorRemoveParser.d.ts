import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class FurnitureFloorRemoveParser implements IMessageParser {
    private _itemId;
    private _isExpired;
    private _userId;
    private _delay;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get itemId(): number;
    get isExpired(): boolean;
    get userId(): number;
    get delay(): number;
}
