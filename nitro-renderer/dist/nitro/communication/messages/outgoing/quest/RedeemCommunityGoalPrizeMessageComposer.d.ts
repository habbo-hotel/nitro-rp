import { IMessageComposer } from '../../../../../api';
export declare class RedeemCommunityGoalPrizeMessageComposer implements IMessageComposer<ConstructorParameters<typeof RedeemCommunityGoalPrizeMessageComposer>> {
    private _data;
    constructor(communityGoalId: number);
    getMessageArray(): [communityGoalId: number];
    dispose(): void;
}
