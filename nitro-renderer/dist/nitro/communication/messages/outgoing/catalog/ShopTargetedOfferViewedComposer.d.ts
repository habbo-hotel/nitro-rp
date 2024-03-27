import { IMessageComposer } from '../../../../../api';
export declare class ShopTargetedOfferViewedComposer implements IMessageComposer<ConstructorParameters<typeof ShopTargetedOfferViewedComposer>> {
    private _data;
    constructor(k: number, _arg_2: number);
    getMessageArray(): [k: number, _arg_2: number];
    dispose(): void;
}
