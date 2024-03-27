import { IMessageDataWrapper } from '../../../../../api';
export declare class ScrKickbackData {
    private _currentHcStreak;
    private _firstSubscriptionDate;
    private _kickbackPercentage;
    private _totalCreditsMissed;
    private _totalCreditsRewarded;
    private _totalCreditsSpent;
    private _creditRewardForStreakBonus;
    private _creditRewardForMonthlySpent;
    private _timeUntilPayday;
    constructor(k: IMessageDataWrapper);
    get currentHcStreak(): number;
    get firstSubscriptionDate(): string;
    get kickbackPercentage(): number;
    get totalCreditsMissed(): number;
    get totalCreditsRewarded(): number;
    get totalCreditsSpent(): number;
    get creditRewardForStreakBonus(): number;
    get creditRewardForMonthlySpent(): number;
    get timeUntilPayday(): number;
}
