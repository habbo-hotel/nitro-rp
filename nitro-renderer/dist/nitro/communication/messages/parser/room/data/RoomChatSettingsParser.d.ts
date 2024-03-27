import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
import { RoomChatSettings } from '../../roomsettings';
export declare class RoomChatSettingsParser implements IMessageParser {
    private _chat;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get chat(): RoomChatSettings;
}
