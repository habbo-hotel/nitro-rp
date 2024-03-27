import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CallForHelpReplyMessageParser } from '../../parser';
export declare class CallForHelpReplyMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CallForHelpReplyMessageParser;
}
