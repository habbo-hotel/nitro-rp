import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MarketplaceCancelOfferResultParser implements IMessageParser {
    private _offerId;
    private _success;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get offerId(): number;
    get success(): boolean;
}
