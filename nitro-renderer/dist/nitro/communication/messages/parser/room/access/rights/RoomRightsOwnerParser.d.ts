import { IMessageDataWrapper, IMessageParser } from '../../../../../../../api';
export declare class RoomRightsOwnerParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
