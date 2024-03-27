export declare class Randomizer {
    static DEFAULT_SEED: number;
    static DEFAULT_MODULUS: number;
    private static _randomizer;
    private _seed;
    private _modulus;
    private _multiplier;
    private _increment;
    static setSeed(k?: number): void;
    static setModulus(k?: number): void;
    static getValues(k: number, _arg_2: number, _arg_3: number): number[];
    static getArray(k: number, _arg_2: number): number[];
    set seed(k: number);
    set modulus(k: number);
    dispose(): void;
    getRandomValues(k: number, _arg_2: number, _arg_3: number): number[];
    getRandomArray(k: number, _arg_2: number): number[];
    private iterate;
    private iterateScaled;
}
