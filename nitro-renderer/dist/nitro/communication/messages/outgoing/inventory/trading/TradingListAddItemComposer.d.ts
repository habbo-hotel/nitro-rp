import { IMessageComposer } from '../../../../../../api';
export declare class TradingListAddItemComposer implements IMessageComposer<ConstructorParameters<typeof TradingListAddItemComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
