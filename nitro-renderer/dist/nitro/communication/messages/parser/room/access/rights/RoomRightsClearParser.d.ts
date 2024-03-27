import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class RoomRightsClearParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
