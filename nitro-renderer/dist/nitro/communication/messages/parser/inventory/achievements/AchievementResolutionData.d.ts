import { IMessageDataWrapper } from '../../../../../../api';
export declare class AchievementResolutionData {
    static STATE_SELECTABLE: number;
    private _achievementId;
    private _level;
    private _badgeId;
    private _requiredLevel;
    private _state;
    constructor(wrapper: IMessageDataWrapper);
    dispose(): void;
    get achievementId(): number;
    get level(): number;
    get badgeId(): string;
    get requiredLevel(): number;
    get enabled(): boolean;
    get state(): number;
}
