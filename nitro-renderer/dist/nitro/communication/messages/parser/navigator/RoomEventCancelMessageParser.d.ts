import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class RoomEventCancelMessageParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
