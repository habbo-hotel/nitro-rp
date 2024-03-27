import { IMessageComposer } from '../../../../../api';
export declare class MakeOfferMessageComposer implements IMessageComposer<ConstructorParameters<typeof MakeOfferMessageComposer>> {
    private _data;
    constructor(credits: number, arg2: number, itemId: number);
    getMessageArray(): [credits: number, arg2: number, itemId: number];
    dispose(): void;
}
