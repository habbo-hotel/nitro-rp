import { IMessageComposer } from '../../../../../api';
export declare class SetTargetedOfferStateComposer implements IMessageComposer<ConstructorParameters<typeof SetTargetedOfferStateComposer>> {
    private _data;
    constructor(k: number, _arg_2: number);
    getMessageArray(): [k: number, _arg_2: number];
    dispose(): void;
}
