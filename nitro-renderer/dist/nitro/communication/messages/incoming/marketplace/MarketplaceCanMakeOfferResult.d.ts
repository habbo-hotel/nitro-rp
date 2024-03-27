import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MarketplaceCanMakeOfferResultParser } from '../../parser';
export declare class MarketplaceCanMakeOfferResult extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MarketplaceCanMakeOfferResultParser;
}
