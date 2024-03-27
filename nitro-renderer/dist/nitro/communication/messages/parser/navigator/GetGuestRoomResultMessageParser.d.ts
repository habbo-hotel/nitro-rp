import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { RoomDataParser } from '../room';
import { RoomChatSettings, RoomModerationSettings } from '../roomsettings';
export declare class GetGuestRoomResultMessageParser implements IMessageParser {
    private _roomEnter;
    private _roomForward;
    private _data;
    private _staffPick;
    private _isGroupMember;
    private _moderation;
    private _chat;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get roomEnter(): boolean;
    get roomForward(): boolean;
    get data(): RoomDataParser;
    get staffPick(): boolean;
    get isGroupMember(): boolean;
    get moderation(): RoomModerationSettings;
    get chat(): RoomChatSettings;
}
