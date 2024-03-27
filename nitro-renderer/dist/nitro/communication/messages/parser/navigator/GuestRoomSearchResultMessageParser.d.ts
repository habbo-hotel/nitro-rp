import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { GuestRoomSearchResultData } from './utils';
export declare class GuestRoomSearchResultMessageParser implements IMessageParser {
    _data: GuestRoomSearchResultData;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): GuestRoomSearchResultData;
}
