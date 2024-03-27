import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { PurchaseNotAllowedMessageParser } from '../../parser';
export declare class PurchaseNotAllowedMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): PurchaseNotAllowedMessageParser;
}
