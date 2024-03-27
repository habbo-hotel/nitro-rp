import { IMessageDataWrapper } from '../../../../../api';
export declare class PrizeData {
    private _communityGoalId;
    private _communityGoalCode;
    private _userRank;
    private _rewardCode;
    private _badge;
    private _localizedName;
    constructor(k: IMessageDataWrapper);
    get communityGoalId(): number;
    get communityGoalCode(): string;
    get userRank(): number;
    get rewardCode(): string;
    get badge(): boolean;
    get localizedName(): string;
}
