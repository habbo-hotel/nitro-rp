import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GuideSessionPartnerIsTypingMessageParser } from '../../parser';
export declare class GuideSessionPartnerIsTypingMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GuideSessionPartnerIsTypingMessageParser;
}
