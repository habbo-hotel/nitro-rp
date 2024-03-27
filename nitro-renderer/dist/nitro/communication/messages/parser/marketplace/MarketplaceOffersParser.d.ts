import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { MarketplaceOffer } from './MarketplaceOffer';
export declare class MarketplaceOffersParser implements IMessageParser {
    private static FURNITYPE_STUFF;
    private static FURNITYPE_WALL;
    private static FAKE_FURNITYPE_UNIQUE;
    private readonly MAX_LIST_LENGTH;
    private _offers;
    private _totalItemsFound;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get offers(): MarketplaceOffer[];
    get totalItemsFound(): number;
}
