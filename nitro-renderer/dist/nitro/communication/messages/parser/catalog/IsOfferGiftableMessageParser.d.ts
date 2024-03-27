import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class IsOfferGiftableMessageParser implements IMessageParser {
    private _offerId;
    private _isGiftable;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get offerId(): number;
    get isGiftable(): boolean;
}
