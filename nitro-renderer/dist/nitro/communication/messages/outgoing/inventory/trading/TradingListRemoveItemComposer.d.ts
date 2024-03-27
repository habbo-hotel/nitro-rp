import { IMessageComposer } from '../../../../../../api';
export declare class TradingListItemRemoveComposer implements IMessageComposer<ConstructorParameters<typeof TradingListItemRemoveComposer>> {
    private _data;
    constructor(itemId: number);
    getMessageArray(): [itemId: number];
    dispose(): void;
}
