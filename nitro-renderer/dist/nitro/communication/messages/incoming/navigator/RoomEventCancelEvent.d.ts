import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RoomEventCancelMessageParser } from '../../parser';
export declare class RoomEventCancelEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomEventCancelMessageParser;
}
