import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { RoomEntryData } from '../user';
export declare class RoomAdPurchaseInfoEventParser implements IMessageParser {
    private _isVip;
    private _rooms;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get isVip(): boolean;
    get rooms(): RoomEntryData[];
}
