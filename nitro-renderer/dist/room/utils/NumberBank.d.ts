export declare class NumberBank {
    private _reservedNumbers;
    private _freeNumbers;
    constructor(k: number);
    dispose(): void;
    reserveNumber(): number;
    freeNumber(k: number): void;
}
