import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class GuideSessionInvitedToGuideRoomMessageParser implements IMessageParser {
    private _roomId;
    private _roomName;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomId(): number;
    get roomName(): string;
}
