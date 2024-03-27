import { IMessageComposer } from '../../../../../../api';
export declare class RemoveWallItemComposer implements IMessageComposer<ConstructorParameters<typeof RemoveWallItemComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
