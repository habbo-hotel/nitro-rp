import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { GiftReceiverNotFoundParser } from '../../parser';
export declare class GiftReceiverNotFoundEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): GiftReceiverNotFoundParser;
}
