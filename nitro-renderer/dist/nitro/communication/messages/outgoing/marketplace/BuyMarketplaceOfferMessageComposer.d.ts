import { IMessageComposer } from '../../../../../api';
export declare class BuyMarketplaceOfferMessageComposer implements IMessageComposer<ConstructorParameters<typeof BuyMarketplaceOfferMessageComposer>> {
    private _data;
    constructor(offerId: number);
    getMessageArray(): [offerId: number];
    dispose(): void;
}
