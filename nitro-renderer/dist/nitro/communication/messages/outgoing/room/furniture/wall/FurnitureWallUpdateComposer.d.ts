import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureWallUpdateComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureWallUpdateComposer>> {
    private _data;
    constructor(itemId: number, location: string);
    getMessageArray(): [itemId: number, location: string];
    dispose(): void;
}
