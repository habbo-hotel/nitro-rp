import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MarketplaceOffersParser } from '../../parser';
export declare class MarketPlaceOffersEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MarketplaceOffersParser;
}
