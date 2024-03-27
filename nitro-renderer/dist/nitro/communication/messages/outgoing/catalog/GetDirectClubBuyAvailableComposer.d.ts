import { IMessageComposer } from '../../../../../api';
export declare class GetDirectClubBuyAvailableComposer implements IMessageComposer<ConstructorParameters<typeof GetDirectClubBuyAvailableComposer>> {
    private _data;
    constructor(days: number);
    getMessageArray(): [days: number];
    dispose(): void;
}
