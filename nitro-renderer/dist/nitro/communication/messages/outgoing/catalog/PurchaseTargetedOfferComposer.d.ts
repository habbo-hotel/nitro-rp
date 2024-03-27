import { IMessageComposer } from '../../../../../api';
export declare class PurchaseTargetedOfferComposer implements IMessageComposer<ConstructorParameters<typeof PurchaseTargetedOfferComposer>> {
    private _data;
    constructor(k: number, _arg_2: number);
    getMessageArray(): [k: number, _arg_2: number];
    dispose(): void;
}
