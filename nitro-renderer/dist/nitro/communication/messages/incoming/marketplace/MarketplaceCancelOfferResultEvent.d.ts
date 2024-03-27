import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MarketplaceCancelOfferResultParser } from '../../parser';
export declare class MarketplaceCancelOfferResultEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MarketplaceCancelOfferResultParser;
}
