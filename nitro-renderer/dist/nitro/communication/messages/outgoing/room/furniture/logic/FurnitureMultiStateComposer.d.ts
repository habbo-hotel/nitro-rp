import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureMultiStateComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureMultiStateComposer>> {
    private _data;
    constructor(itemId: number, state?: number);
    getMessageArray(): [itemId: number, state?: number];
    dispose(): void;
}
