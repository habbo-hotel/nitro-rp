export declare class GameAchievementData {
    private _gameTypeId;
    private _achievementId;
    private _achievementName;
    private _levels;
    constructor(gameTypeId: number, achievementId: number, achievementName: string, levels: number);
    get gameTypeId(): number;
    get achievementId(): number;
    get achievementName(): string;
    get levels(): number;
}
