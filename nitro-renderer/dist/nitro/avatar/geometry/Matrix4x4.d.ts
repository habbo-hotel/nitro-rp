import { Vector3D } from './Vector3D';
export declare class Matrix4x4 {
    static IDENTITY: Matrix4x4;
    private static TOLERANS;
    private _data;
    constructor(k?: number, _arg_2?: number, _arg_3?: number, _arg_4?: number, _arg_5?: number, _arg_6?: number, _arg_7?: number, _arg_8?: number, _arg_9?: number);
    static getXRotationMatrix(k: number): Matrix4x4;
    static getYRotationMatrix(k: number): Matrix4x4;
    static getZRotationMatrix(k: number): Matrix4x4;
    identity(): Matrix4x4;
    vectorMultiplication(k: Vector3D): Vector3D;
    multiply(k: Matrix4x4): Matrix4x4;
    scalarMultiply(k: number): void;
    rotateX(k: number): Matrix4x4;
    rotateY(k: number): Matrix4x4;
    rotateZ(k: number): Matrix4x4;
    skew(): void;
    transpose(): Matrix4x4;
    equals(k: Matrix4x4): boolean;
    get data(): number[];
}
