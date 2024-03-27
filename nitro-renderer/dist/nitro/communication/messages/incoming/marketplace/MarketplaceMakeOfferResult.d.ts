import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MarketplaceMakeOfferResultParser } from '../../parser';
export declare class MarketplaceMakeOfferResult extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MarketplaceMakeOfferResultParser;
}
