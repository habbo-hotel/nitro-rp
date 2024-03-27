import { IMessageComposer } from '../../../../../../api';
export declare class GetItemDataComposer implements IMessageComposer<ConstructorParameters<typeof GetItemDataComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
