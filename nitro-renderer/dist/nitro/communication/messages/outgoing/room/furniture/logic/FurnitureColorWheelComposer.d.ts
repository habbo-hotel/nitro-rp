import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureColorWheelComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureColorWheelComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
