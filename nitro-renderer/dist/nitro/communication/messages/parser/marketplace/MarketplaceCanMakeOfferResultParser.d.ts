import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MarketplaceCanMakeOfferResultParser implements IMessageParser {
    private _tokenCount;
    private _result;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get tokenCount(): number;
    get resultCode(): number;
}
