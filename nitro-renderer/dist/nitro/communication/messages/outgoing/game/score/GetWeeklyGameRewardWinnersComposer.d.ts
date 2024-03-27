import { IMessageComposer } from '../../../../../../api';
export declare class GetWeeklyGameRewardWinnersComposer implements IMessageComposer<ConstructorParameters<typeof GetWeeklyGameRewardWinnersComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
