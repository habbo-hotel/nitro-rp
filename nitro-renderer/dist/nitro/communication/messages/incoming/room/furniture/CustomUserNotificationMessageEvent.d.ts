import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { CustomUserNotificationMessageParser } from '../../../parser';
export declare class CustomUserNotificationMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CustomUserNotificationMessageParser;
}
