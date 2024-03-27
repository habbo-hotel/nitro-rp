import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { IssueCloseNotificationMessageParser } from '../../parser';
export declare class IssueCloseNotificationMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): IssueCloseNotificationMessageParser;
}
