import { IAdvancedMap } from './IAdvancedMap';
export declare class AdvancedMap<T, U> implements IAdvancedMap<T, U> {
    private _length;
    private _dictionary;
    private _array;
    private _keys;
    constructor(map?: Map<T, U>);
    get length(): number;
    get disposed(): boolean;
    dispose(): void;
    reset(): void;
    unshift(key: T, value: U): boolean;
    add(key: T, value: U): boolean;
    remove(key: T): U;
    getWithIndex(index: number): U;
    getKey(index: number): T;
    getKeys(): T[];
    hasKey(key: T): boolean;
    getValue(key: T): U;
    getValues(): U[];
    hasValue(value: U): boolean;
    indexOf(value: U): number;
    concatenate(newValues: IAdvancedMap<T, U>): void;
    clone(): IAdvancedMap<T, U>;
}
