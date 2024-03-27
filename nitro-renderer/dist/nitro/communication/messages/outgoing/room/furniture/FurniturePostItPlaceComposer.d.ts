import { IMessageComposer } from '../../../../../../api';
export declare class FurniturePostItPlaceComposer implements IMessageComposer<ConstructorParameters<typeof FurniturePostItPlaceComposer>> {
    private _data;
    constructor(itemId: number, wallLocation: string);
    getMessageArray(): [itemId: number, wallLocation: string];
    dispose(): void;
}
