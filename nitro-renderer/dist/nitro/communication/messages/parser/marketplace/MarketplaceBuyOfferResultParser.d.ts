import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MarketplaceBuyOfferResultParser implements IMessageParser {
    private _result;
    private _newOfferId;
    private _newPrice;
    private _requestedOfferId;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get result(): number;
    get offerId(): number;
    get newPrice(): number;
    get requestedOfferId(): number;
}
