import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ActivityPointNotificationParser } from '../../parser';
export declare class ActivityPointNotificationMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ActivityPointNotificationParser;
}
