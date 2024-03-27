import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideTicketResolutionMessageParser } from '../../parser';
export declare class GuideTicketResolutionMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideTicketResolutionMessageParser;
}
