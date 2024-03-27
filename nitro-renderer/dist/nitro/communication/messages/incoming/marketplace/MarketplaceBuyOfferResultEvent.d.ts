import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MarketplaceBuyOfferResultParser } from '../../parser';
export declare class MarketplaceBuyOfferResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MarketplaceBuyOfferResultParser;
}
