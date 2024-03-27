import { IMessageComposer } from '../../../../../api';
export declare class GetIsOfferGiftableComposer implements IMessageComposer<ConstructorParameters<typeof GetIsOfferGiftableComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
