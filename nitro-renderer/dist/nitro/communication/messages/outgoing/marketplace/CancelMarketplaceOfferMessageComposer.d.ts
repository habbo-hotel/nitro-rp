import { IMessageComposer } from '../../../../../api';
export declare class CancelMarketplaceOfferMessageComposer implements IMessageComposer<ConstructorParameters<typeof CancelMarketplaceOfferMessageComposer>> {
    private _data;
    constructor(offerId: number);
    getMessageArray(): [offerId: number];
    dispose(): void;
}
