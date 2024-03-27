import { IMessageComposer } from '../../../../../../api';
export declare class GetWeeklyGameRewardComposer implements IMessageComposer<ConstructorParameters<typeof GetWeeklyGameRewardComposer>> {
    private _data;
    constructor(k: number);
    dispose(): void;
    getMessageArray(): [k: number];
}
