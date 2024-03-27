export declare class HighScoreData {
    private _score;
    private _users;
    constructor();
    get score(): number;
    set score(k: number);
    get users(): string[];
    set users(k: string[]);
    addUsername(k: string): void;
}
