export declare class FixedSizeStack {
    private _data;
    private _maxSize;
    private _index;
    constructor(k: number);
    reset(): void;
    addValue(k: number): void;
    getMax(): number;
    getMin(): number;
}
