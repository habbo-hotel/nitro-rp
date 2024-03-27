import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomChatSettingsParser } from '../../../parser';
export declare class RoomChatSettingsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomChatSettingsParser;
}
