import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class CanCreateRoomMessageParser implements IMessageParser {
    static readonly CREATION_ALLOWED = 0;
    static readonly ROOM_LIMIT_REACHED = 1;
    private _resultCode;
    private _roomLimit;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get resultCode(): number;
    get roomLimit(): number;
}
