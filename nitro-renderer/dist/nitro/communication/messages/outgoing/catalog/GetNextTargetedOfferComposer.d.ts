import { IMessageComposer } from '../../../../../api';
export declare class GetNextTargetedOfferComposer implements IMessageComposer<ConstructorParameters<typeof GetNextTargetedOfferComposer>> {
    private _data;
    constructor(k: number);
    getMessageArray(): [k: number];
    dispose(): void;
}
