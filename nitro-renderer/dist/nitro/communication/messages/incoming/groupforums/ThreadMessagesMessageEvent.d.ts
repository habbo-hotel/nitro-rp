import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ThreadMessagesMessageParser } from '../../parser';
export declare class ThreadMessagesMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ThreadMessagesMessageParser;
}
