import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CallForHelpPendingCallsDeletedMessageParser } from '../../parser';
export declare class CallForHelpPendingCallsDeletedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CallForHelpPendingCallsDeletedMessageParser;
}
