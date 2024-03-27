import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CallForHelpDisabledNotifyMessageParser } from '../../parser';
export declare class CallForHelpDisabledNotifyMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CallForHelpDisabledNotifyMessageParser;
}
