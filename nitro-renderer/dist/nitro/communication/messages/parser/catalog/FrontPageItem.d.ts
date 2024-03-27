import { IMessageDataWrapper } from '../../../../../api';
export declare class FrontPageItem {
    static ITEM_CATALOGUE_PAGE: number;
    static ITEM_PRODUCT_OFFER: number;
    static ITEM_IAP: number;
    private _type;
    private _position;
    private _itemName;
    private _itemPromoImage;
    private _catalogPageLocation;
    private _productCode;
    private _productOfferId;
    private _expirationTime;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get type(): number;
    get position(): number;
    get itemName(): string;
    get itemPromoImage(): string;
    get catalogPageLocation(): string;
    get productCode(): string;
    get productOfferId(): number;
    get expirationTime(): number;
}
