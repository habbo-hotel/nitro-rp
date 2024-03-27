export declare class Vector3D {
    private _x;
    private _y;
    private _z;
    constructor(k?: number, _arg_2?: number, _arg_3?: number);
    static dot(k: Vector3D, _arg_2: Vector3D): number;
    static cross(k: Vector3D, _arg_2: Vector3D): Vector3D;
    static subtract(k: Vector3D, _arg_2: Vector3D): Vector3D;
    dot(k: Vector3D): number;
    cross(k: Vector3D): Vector3D;
    subtract(k: Vector3D): void;
    add(k: Vector3D): void;
    normalize(): void;
    scaleBy(value: number): void;
    length(): number;
    toString(): string;
    get x(): number;
    set x(k: number);
    get y(): number;
    set y(k: number);
    get z(): number;
    set z(k: number);
}
