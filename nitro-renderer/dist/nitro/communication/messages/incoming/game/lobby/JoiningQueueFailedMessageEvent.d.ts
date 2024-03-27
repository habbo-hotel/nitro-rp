import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { JoiningQueueFailedMessageParser } from '../../../parser';
export declare class JoiningQueueFailedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): JoiningQueueFailedMessageParser;
}
