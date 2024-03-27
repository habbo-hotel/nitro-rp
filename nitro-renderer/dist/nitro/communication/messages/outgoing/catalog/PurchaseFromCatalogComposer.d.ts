import { IMessageComposer } from '../../../../../api';
export declare class PurchaseFromCatalogComposer implements IMessageComposer<ConstructorParameters<typeof PurchaseFromCatalogComposer>> {
    private _data;
    constructor(pageId: number, offerId: number, extraData: string, amount: number);
    getMessageArray(): [pageId: number, offerId: number, extraData: string, amount: number];
    dispose(): void;
}
