import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { BotData } from './BotData';
export declare class BotAddedToInventoryParser implements IMessageParser {
    private _item;
    private _openInventory;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get item(): BotData;
    openInventory(): boolean;
}
