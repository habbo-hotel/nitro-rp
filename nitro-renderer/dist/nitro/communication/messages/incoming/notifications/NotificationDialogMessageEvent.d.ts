import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { NotificationDialogMessageParser } from '../../parser';
export declare class NotificationDialogMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): NotificationDialogMessageParser;
}
