import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class FurniRentOrBuyoutOfferMessageParser implements IMessageParser {
    private _isWallItem;
    private _furniTypeName;
    private _buyout;
    private _priceInCredits;
    private _priceInActivityPoints;
    private _activityPointType;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get isWallItem(): boolean;
    get furniTypeName(): string;
    get buyout(): boolean;
    get priceInCredits(): number;
    get priceInActivityPoints(): number;
    get activityPointType(): number;
}
