import { Matrix4x4 } from './Matrix4x4';
import { Vector3D } from './Vector3D';
export declare class Node3D {
    private _location;
    private _transformedLocation;
    private _needsTransformation;
    constructor(k: number, _arg_2: number, _arg_3: number);
    get location(): Vector3D;
    get transformedLocation(): Vector3D;
    applyTransform(k: Matrix4x4): void;
}
