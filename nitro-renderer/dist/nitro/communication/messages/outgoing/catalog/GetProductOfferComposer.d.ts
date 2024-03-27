import { IMessageComposer } from '../../../../../api';
export declare class GetProductOfferComposer implements IMessageComposer<ConstructorParameters<typeof GetProductOfferComposer>> {
    private _data;
    constructor(offerId: number);
    getMessageArray(): [offerId: number];
    dispose(): void;
}
