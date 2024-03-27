import { IMessageComposer } from '../../../../../../api';
export declare class UnseenResetItemsComposer implements IMessageComposer<ConstructorParameters<typeof UnseenResetItemsComposer>> {
    private _data;
    constructor(category: number, ...itemIds: number[]);
    getMessageArray(): [category: number, ...itemIds: number[]];
    dispose(): void;
}
