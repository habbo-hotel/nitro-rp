import { IProductData } from '../../../api';
import { EventDispatcher } from '../../../core';
export declare class ProductDataLoader extends EventDispatcher {
    static PDP_PRODUCT_DATA_READY: string;
    static PDP_PRODUCT_DATA_FAILED: string;
    private _products;
    constructor(products: Map<string, IProductData>);
    dispose(): void;
    loadProductData(url: string): void;
    private onProductDataLoadedEvent;
    private onProductDataError;
    private parseProducts;
}
