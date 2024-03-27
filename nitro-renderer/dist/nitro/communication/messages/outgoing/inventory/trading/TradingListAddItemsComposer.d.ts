import { IMessageComposer } from '../../../../../../api';
export declare class TradingListAddItemsComposer implements IMessageComposer<ConstructorParameters<typeof TradingListAddItemsComposer>> {
    private _data;
    constructor(...itemIds: number[]);
    getMessageArray(): number[];
    dispose(): void;
}
