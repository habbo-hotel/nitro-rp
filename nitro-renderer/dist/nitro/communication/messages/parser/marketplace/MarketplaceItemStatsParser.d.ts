import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MarketplaceItemStatsParser implements IMessageParser {
    private _averagePrice;
    private _currentOfferCount;
    private _historyLength;
    private _dayOffsets;
    private _averagePrices;
    private _soldAmounts;
    private _furniTypeId;
    private _furniCategoryId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get averagePrice(): number;
    get offerCount(): number;
    get historyLength(): number;
    get dayOffsets(): number[];
    get averagePrices(): number[];
    get soldAmounts(): number[];
    get furniTypeId(): number;
    get furniCategoryId(): number;
}
