import { IMessageComposer } from '../../../../../../api';
export declare class TradingOpenComposer implements IMessageComposer<ConstructorParameters<typeof TradingOpenComposer>> {
    private _data;
    constructor(userId: number);
    getMessageArray(): [userId: number];
    dispose(): void;
}
