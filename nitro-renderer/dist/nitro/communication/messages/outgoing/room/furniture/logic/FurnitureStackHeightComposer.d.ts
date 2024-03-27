import { IMessageComposer } from '../../../../../../../api';
export declare class FurnitureStackHeightComposer implements IMessageComposer<ConstructorParameters<typeof FurnitureStackHeightComposer>> {
    private _data;
    constructor(itemId: number, height?: number);
    getMessageArray(): [itemId: number, height?: number];
    dispose(): void;
}
