import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { MarketplaceOffer } from './MarketplaceOffer';
export declare class MarketplaceOwnOffersParser implements IMessageParser {
    private static MAX_LIST_LENGTH;
    private _offers;
    private _creditsWaiting;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get offers(): MarketplaceOffer[];
    get creditsWaiting(): number;
    private getStuffData;
}
