import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomChatlogMessageParser } from '../../parser';
export declare class RoomChatlogEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomChatlogMessageParser;
}
