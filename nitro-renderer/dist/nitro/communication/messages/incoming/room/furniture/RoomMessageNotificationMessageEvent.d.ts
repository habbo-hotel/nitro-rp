import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { RoomMessageNotificationMessageParser } from '../../../parser';
export declare class RoomMessageNotificationMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RoomMessageNotificationMessageParser;
}
