import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class RoomMessageNotificationMessageParser implements IMessageParser {
    private _roomId;
    private _roomName;
    private _messageCount;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get roomName(): string;
    get messageCount(): number;
}
