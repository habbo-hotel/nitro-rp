import { IMessageDataWrapper } from '../../../../../api';
export declare class CatalogPageMessageProductData {
    static I: string;
    static S: string;
    static E: string;
    static B: string;
    private _productType;
    private _furniClassId;
    private _extraParam;
    private _productCount;
    private _uniqueLimitedItem;
    private _uniqueLimitedItemSeriesSize;
    private _uniqueLimitedItemsLeft;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get productType(): string;
    get furniClassId(): number;
    get extraParam(): string;
    get productCount(): number;
    get uniqueLimitedItem(): boolean;
    get uniqueLimitedSeriesSize(): number;
    get uniqueLimitedItemsLeft(): number;
}
