import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class BotRemovedFromInventoryParser implements IMessageParser {
    private _itemId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get itemId(): number;
}
