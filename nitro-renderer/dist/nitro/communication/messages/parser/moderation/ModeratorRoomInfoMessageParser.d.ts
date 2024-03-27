import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { RoomModerationData } from './RoomModerationData';
export declare class ModeratorRoomInfoMessageParser implements IMessageParser {
    private _data;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get data(): RoomModerationData;
}
