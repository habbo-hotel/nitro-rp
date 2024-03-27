import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CallForHelpPendingCallsMessageParser } from '../../parser';
export declare class CallForHelpPendingCallsMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CallForHelpPendingCallsMessageParser;
}
