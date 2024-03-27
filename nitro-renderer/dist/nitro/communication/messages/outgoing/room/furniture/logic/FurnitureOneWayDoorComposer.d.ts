import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureOneWayDoorComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureOneWayDoorComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
