import { IMessageComposer } from '../../../../../../api';
export declare class CommunityGoalVoteMessageComposer implements IMessageComposer<ConstructorParameters<typeof CommunityGoalVoteMessageComposer>> {
    private _data;
    constructor(voteOption: number);
    getMessageArray(): [voteOption: number];
    dispose(): void;
}
