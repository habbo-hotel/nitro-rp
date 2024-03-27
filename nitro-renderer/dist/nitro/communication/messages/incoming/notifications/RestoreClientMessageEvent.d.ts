import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { RestoreClientMessageParser } from '../../parser';
export declare class RestoreClientMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): RestoreClientMessageParser;
}
