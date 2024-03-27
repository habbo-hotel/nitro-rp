import { IMessageDataWrapper, IMessageParser } from '../../../../../../api';
export declare class AchievementResolutionProgressMessageParser implements IMessageParser {
    private _stuffId;
    private _achievementId;
    private _requiredLevelBadgeCode;
    private _userProgress;
    private _totalProgress;
    private _endTime;
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get stuffId(): number;
    get achievementId(): number;
    get requiredLevelBadgeCode(): string;
    get userProgress(): number;
    get totalProgress(): number;
    get endTime(): number;
}
