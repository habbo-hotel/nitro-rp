import { IMessageDataWrapper } from '../../../../../api';
export declare class AchievementLevelUpData {
    private _type;
    private _level;
    private _points;
    private _levelRewardPoints;
    private _levelRewardPointType;
    private _bonusPoints;
    private _badgeId;
    private _badgeCode;
    private _removedBadgeCode;
    private _achievementID;
    private _category;
    private _showDialogToUser;
    constructor(wrapper: IMessageDataWrapper);
    get type(): number;
    get level(): number;
    get points(): number;
    get levelRewardPoints(): number;
    get levelRewardPointType(): number;
    get bonusPoints(): number;
    get badgeId(): number;
    get badgeCode(): string;
    get removedBadgeCode(): string;
    get achievementID(): number;
    get category(): string;
    get showDialogToUser(): boolean;
}
