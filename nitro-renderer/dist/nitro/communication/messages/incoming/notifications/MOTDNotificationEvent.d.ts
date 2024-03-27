import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MOTDNotificationParser } from '../../parser';
export declare class MOTDNotificationEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MOTDNotificationParser;
}
