import { IMessageComposer } from '../../../../../api';
export declare class RecycleItemsMessageComposer implements IMessageComposer<any> {
    private _data;
    constructor(...data: RecycleItemsEntry[]);
    getMessageArray(): any;
    dispose(): void;
}
export declare class RecycleItemsEntry {
    itemId: number;
    constructor(itemId: number);
}
