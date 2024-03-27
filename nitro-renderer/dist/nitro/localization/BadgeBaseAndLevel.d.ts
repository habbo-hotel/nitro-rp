export declare class BadgeBaseAndLevel {
    private _badgeId;
    private _level;
    private _base;
    constructor(badgeId: string);
    private parseText;
    private isNumber;
    get level(): number;
    set level(k: number);
    get getBadgeId(): string;
    get base(): string;
}
