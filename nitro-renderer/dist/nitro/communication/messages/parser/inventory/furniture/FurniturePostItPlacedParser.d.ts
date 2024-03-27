import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class FurniturePostItPlacedParser implements IMessageParser {
    private _itemId;
    private _itemsLeft;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get itemId(): number;
    get itemsLeft(): number;
}
