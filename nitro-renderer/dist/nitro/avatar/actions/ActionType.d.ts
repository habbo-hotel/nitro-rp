export declare class ActionType {
    private _id;
    private _value;
    private _prevents;
    private _preventHeadTurn;
    private _isAnimated;
    constructor(data: any);
    get id(): number;
    get value(): number;
    get prevents(): string[];
    get preventHeadTurn(): boolean;
    get isAnimated(): boolean;
}
