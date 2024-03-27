import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../events';
import { FurniRentOrBuyoutOfferMessageParser } from '../../../parser';
export declare class FurniRentOrBuyoutOfferMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): FurniRentOrBuyoutOfferMessageParser;
}
