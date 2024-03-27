import { IMessageDataWrapper } from '../../../../../api';
import { CatalogPageMessageProductData } from './CatalogPageMessageProductData';
export declare class CatalogPageMessageOfferData {
    private _offerId;
    private _localizationId;
    private _rent;
    private _priceCredits;
    private _priceActivityPoints;
    private _priceActivityPointsType;
    private _clubLevel;
    private _giftable;
    private _bundlePurchaseAllowed;
    private _isPet;
    private _previewImage;
    private _products;
    constructor(wrapper: IMessageDataWrapper);
    get offerId(): number;
    get localizationId(): string;
    get rent(): boolean;
    get priceCredits(): number;
    get priceActivityPoints(): number;
    get priceActivityPointsType(): number;
    get clubLevel(): number;
    get giftable(): boolean;
    get bundlePurchaseAllowed(): boolean;
    get isPet(): boolean;
    get previewImage(): string;
    get products(): CatalogPageMessageProductData[];
}
