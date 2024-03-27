import { IMessageEvent } from '../../../../../api';
import { MessageEvent } from '../../../../../events';
import { MarketplaceItemStatsParser } from '../../parser';
export declare class MarketplaceItemStatsEvent extends MessageEvent implements IMessageEvent {
    constructor(callBack: Function);
    getParser(): MarketplaceItemStatsParser;
}
