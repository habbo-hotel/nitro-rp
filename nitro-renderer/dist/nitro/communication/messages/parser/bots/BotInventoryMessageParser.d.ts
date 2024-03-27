import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { BotData } from './BotData';
export declare class BotInventoryMessageParser implements IMessageParser {
    private _items;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get items(): Map<number, BotData>;
}
