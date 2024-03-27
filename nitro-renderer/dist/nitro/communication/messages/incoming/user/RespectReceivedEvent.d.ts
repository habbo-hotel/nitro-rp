import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RespectReceivedParser } from '../../parser';
export declare class RespectReceivedEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RespectReceivedParser;
}
