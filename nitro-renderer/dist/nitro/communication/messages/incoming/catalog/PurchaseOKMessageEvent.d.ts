import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PurchaseOKMessageParser } from '../../parser';
export declare class PurchaseOKMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PurchaseOKMessageParser;
}
