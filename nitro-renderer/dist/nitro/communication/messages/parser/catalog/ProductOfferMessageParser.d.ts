import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CatalogPageMessageOfferData } from './CatalogPageMessageOfferData';
export declare class ProductOfferMessageParser implements IMessageParser {
    private _offer;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get offer(): CatalogPageMessageOfferData;
}
