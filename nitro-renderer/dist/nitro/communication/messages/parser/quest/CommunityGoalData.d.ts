import { IDisposable, IMessageDataWrapper } from '../../../../../api';
export declare class CommunityGoalData implements IDisposable {
    private _hasGoalExpired;
    private _personalContributionScore;
    private _personalContributionRank;
    private _communityTotalScore;
    private _communityHighestAchievedLevel;
    private _scoreRemainingUntilNextLevel;
    private _percentCompletionTowardsNextLevel;
    private _goalCode;
    private _timeRemainingInSeconds;
    private _rewardUserLimits;
    constructor(wrapper: IMessageDataWrapper);
    dispose(): void;
    get disposed(): boolean;
    get hasGoalExpired(): boolean;
    get personalContributionScore(): number;
    get personalContributionRank(): number;
    get communityTotalScore(): number;
    get communityHighestAchievedLevel(): number;
    get scoreRemainingUntilNextLevel(): number;
    get percentCompletionTowardsNextLevel(): number;
    get timeRemainingInSeconds(): number;
    get rewardUserLimits(): number[];
    get goalCode(): string;
}
