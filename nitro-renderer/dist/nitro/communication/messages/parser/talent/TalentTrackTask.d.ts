export declare class TalentTrackTask {
    private _id;
    private _requiredLevel;
    private _badgeCode;
    private _state;
    private _currentScore;
    private _totalScore;
    constructor(id: number, requiredLevel: number, badgeCode: string, state: number, currentScore: number, totalScore: number);
    get id(): number;
    get requiredLevel(): number;
    get badgeCode(): string;
    get state(): number;
    get currentScore(): number;
    get totalScore(): number;
}
