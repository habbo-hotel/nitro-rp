import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomEnterParser implements IMessageParser {
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
}
