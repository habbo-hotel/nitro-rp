import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MessageErrorParser } from '../../parser';
export declare class MessageErrorEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MessageErrorParser;
}
