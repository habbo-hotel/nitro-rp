import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class LimitedOfferAppearingNextMessageParser implements IMessageParser {
    private _appearsInSeconds;
    private _pageId;
    private _offerId;
    private _productType;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get appearsInSeconds(): number;
    get pageId(): number;
    get offerId(): number;
    get productType(): string;
}
