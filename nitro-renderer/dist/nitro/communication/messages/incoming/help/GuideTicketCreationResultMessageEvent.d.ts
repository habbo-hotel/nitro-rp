import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideTicketCreationResultMessageParser } from '../../parser';
export declare class GuideTicketCreationResultMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideTicketCreationResultMessageParser;
}
