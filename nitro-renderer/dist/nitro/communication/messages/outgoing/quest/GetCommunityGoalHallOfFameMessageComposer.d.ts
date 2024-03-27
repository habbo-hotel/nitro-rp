import { IMessageComposer } from '../../../../../api';
export declare class GetCommunityGoalHallOfFameMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetCommunityGoalHallOfFameMessageComposer>> {
    private _data;
    constructor(k: string);
    getMessageArray(): [k: string];
    dispose(): void;
}
