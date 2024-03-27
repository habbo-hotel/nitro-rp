import { IMessageDataWrapper, IMessageParser } from '../../../../../api';
import { CatalogPageMessageProductData } from './CatalogPageMessageProductData';
export declare class ClubGiftSelectedParser implements IMessageParser {
    private _productCode;
    private _products;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get productCode(): string;
    get products(): CatalogPageMessageProductData[];
}
