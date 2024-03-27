import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureWallMultiStateComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureWallMultiStateComposer>> {
    private _data;
    constructor(itemId: number, state: number);
    getMessageArray(): [itemId: number, state: number];
    dispose(): void;
}
