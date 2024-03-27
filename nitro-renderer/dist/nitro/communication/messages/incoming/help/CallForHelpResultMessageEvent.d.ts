import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { CallForHelpResultMessageParser } from '../../parser';
export declare class CallForHelpResultMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): CallForHelpResultMessageParser;
}
