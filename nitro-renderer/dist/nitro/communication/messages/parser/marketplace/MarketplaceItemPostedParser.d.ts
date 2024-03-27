import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
export declare class MarketplaceMakeOfferResultParser implements IMessageParser {
    private _result;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get result(): number;
}
