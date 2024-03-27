import { IMessageComposer } from '../../../../../../api';
export declare class FurniturePickupComposer implements IMessageComposer<ConstructorParameters<typeof FurniturePickupComposer>> {
    private _data;
    constructor(category: number, objectId: number);
    getMessageArray(): [category: number, objectId: number];
    dispose(): void;
}
