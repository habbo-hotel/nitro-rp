import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { DisconnectReasonParser } from '../../parser';
export declare class DisconnectReasonEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): DisconnectReasonParser;
    get reasonString(): string;
}
