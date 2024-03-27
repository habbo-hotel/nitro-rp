import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomEntryInfoMessageParser implements IMessageParser {
    private _roomId;
    private _isOwner;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get isOwner(): boolean;
}
