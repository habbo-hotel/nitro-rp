import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { LeftQueueMessageParser } from '../../../parser';
export declare class LeftQueueMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): LeftQueueMessageParser;
}
