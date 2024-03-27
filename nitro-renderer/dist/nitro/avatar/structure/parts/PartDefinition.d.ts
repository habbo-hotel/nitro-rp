export declare class PartDefinition {
    private _setType;
    private _flippedSetType;
    private _removeSetType;
    private _appendToFigure;
    private _staticId;
    constructor(data: any);
    hasStaticId(): boolean;
    get staticId(): number;
    set staticId(k: number);
    get setType(): string;
    get flippedSetType(): string;
    set flippedSetType(type: string);
    get removeSetType(): string;
    get appendToFigure(): boolean;
    set appendToFigure(flag: boolean);
}
