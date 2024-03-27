import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { ProductOfferMessageParser } from '../../parser';
export declare class ProductOfferEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): ProductOfferMessageParser;
}
