import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureFloorUpdateComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureFloorUpdateComposer>> {
    private _data;
    constructor(itemId: number, x: number, y: number, direction: number);
    getMessageArray(): [itemId: number, x: number, y: number, direction: number];
    dispose(): void;
}
