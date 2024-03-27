import { IObjectData } from '../../../../../api';
export declare class MarketplaceOffer {
    private readonly _offerId;
    private readonly _furniId;
    private readonly _furniType;
    private readonly _extraData;
    private readonly _stuffData;
    private readonly _price;
    private readonly _status;
    private readonly _timeLeftMinutes;
    private readonly _averagePrice;
    private readonly _offerCount;
    constructor(offerId: number, furniId: number, furniType: number, extraData: string, stuffData: IObjectData, price: number, status: number, timeLeftMinutes: number, averagePrice: number, offerCount?: number);
    get offerId(): number;
    get furniId(): number;
    get furniType(): number;
    get extraData(): string;
    get stuffData(): IObjectData;
    get price(): number;
    get status(): number;
    get timeLeftMinutes(): number;
    get averagePrice(): number;
    get offerCount(): number;
    get isUniqueLimitedItem(): boolean;
}
