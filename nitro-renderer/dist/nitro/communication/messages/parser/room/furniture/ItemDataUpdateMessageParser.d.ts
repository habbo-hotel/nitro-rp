import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class ItemDataUpdateMessageParser implements IMessageParser {
    private _itemId;
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get furnitureId(): number;
    get data(): string;
}
