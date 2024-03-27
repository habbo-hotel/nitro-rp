import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { ItemDataStructure, TradingListItemParser } from '../../../parser';
export declare class TradingListItemEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    get firstUserID(): number;
    get secondUserID(): number;
    get firstUserNumItems(): number;
    get secondUserNumItems(): number;
    get firstUserNumCredits(): number;
    get secondUserNumCredits(): number;
    get firstUserItemArray(): ItemDataStructure[];
    get secondUserItemArray(): ItemDataStructure[];
    getParser(): TradingListItemParser;
}
