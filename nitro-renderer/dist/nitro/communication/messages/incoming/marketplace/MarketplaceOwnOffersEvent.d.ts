import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MarketplaceOwnOffersParser } from '../../parser';
export declare class MarketplaceOwnOffersEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MarketplaceOwnOffersParser;
}
