import { Node3D } from './Node3D';
import { Vector3D } from './Vector3D';
export declare class GeometryItem extends Node3D {
    private _id;
    private _radius;
    private _normal;
    private _isDoubleSided;
    private _isDynamic;
    constructor(k: any, _arg_2?: boolean);
    getDistance(k: Vector3D): number;
    get id(): string;
    get normal(): Vector3D;
    get isDoubleSided(): boolean;
    toString(): string;
    get isDynamic(): boolean;
}
