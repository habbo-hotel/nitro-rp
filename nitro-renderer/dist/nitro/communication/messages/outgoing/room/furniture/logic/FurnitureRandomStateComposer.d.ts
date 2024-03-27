import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureRandomStateComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureRandomStateComposer>> {
    private _data;
    constructor(itemId: number, state: number);
    getMessageArray(): [itemId: number, state: number];
    dispose(): void;
}
