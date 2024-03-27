import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class FurnitureWallRemoveParser implements IMessageParser {
    private _itemId;
    private _userId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get itemId(): number;
    get userId(): number;
}
