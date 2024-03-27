import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { ItemDataStructure } from './ItemDataStructure';
export declare class TradingListItemParser implements IMessageParser {
    private _firstUserID;
    private _firstUserItemArray;
    private _firstUserNumItems;
    private _firstUserNumCredits;
    private _secondUserID;
    private _secondUserItemArray;
    private _secondUserNumItems;
    private _secondUserNumCredits;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    private parseItems;
    get firstUserID(): number;
    get firstUserItemArray(): ItemDataStructure[];
    get firstUserNumItems(): number;
    get firstUserNumCredits(): number;
    get secondUserID(): number;
    get secondUserItemArray(): ItemDataStructure[];
    get secondUserNumItems(): number;
    get secondUserNumCredits(): number;
}
