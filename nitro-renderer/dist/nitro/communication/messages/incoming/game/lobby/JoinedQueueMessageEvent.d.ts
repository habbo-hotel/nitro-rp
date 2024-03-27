import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { JoinedQueueMessageParser } from '../../../parser';
export declare class JoinedQueueMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): JoinedQueueMessageParser;
}
