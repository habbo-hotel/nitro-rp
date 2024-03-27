import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { IsOfferGiftableMessageParser } from '../../parser';
export declare class IsOfferGiftableMessageEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): IsOfferGiftableMessageParser;
}
