export declare class PlayListEntry {
    protected _id: number;
    protected _length: number;
    protected _name: string;
    protected _creator: string;
    private _startPlayHead;
    constructor(id: number, length: number, name: string, creator: string);
    get id(): number;
    get length(): number;
    get name(): string;
    get creator(): string;
    get startPlayHeadPos(): number;
    set startPlayHeadPos(k: number);
}
