import { IMessageComposer } from '../../../../../api';
export declare class RedeemItemClothingComposer implements IMessageComposer<ConstructorParameters<typeof RedeemItemClothingComposer>> {
    private _data;
    constructor(setId: number);
    getMessageArray(): [setId: number];
    dispose(): void;
}
