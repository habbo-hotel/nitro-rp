import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { ChatRecordData } from './ChatRecordData';
export declare class RoomChatlogMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): ChatRecordData;
}
