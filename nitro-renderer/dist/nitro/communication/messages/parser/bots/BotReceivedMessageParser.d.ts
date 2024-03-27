import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { BotData } from './BotData';
export declare class BotReceivedMessageParser implements IMessageParser {
    private _boughtAsGift;
    private _item;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get boughtAsGift(): boolean;
    get item(): BotData;
}
