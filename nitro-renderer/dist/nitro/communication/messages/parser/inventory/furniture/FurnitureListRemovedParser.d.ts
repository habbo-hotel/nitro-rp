import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class FurnitureListRemovedParser implements IMessageParser {
    private _itemId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get itemId(): number;
}
