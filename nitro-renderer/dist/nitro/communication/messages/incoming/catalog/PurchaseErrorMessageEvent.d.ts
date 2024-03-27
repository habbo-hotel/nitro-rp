import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PurchaseErrorMessageParser } from '../../parser';
export declare class PurchaseErrorMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PurchaseErrorMessageParser;
}
