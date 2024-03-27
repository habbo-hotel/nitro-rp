import { IAvatarImage } from '../../../api';
import { GeometryItem } from './GeometryItem';
import { Matrix4x4 } from './Matrix4x4';
import { Node3D } from './Node3D';
import { Vector3D } from './Vector3D';
export declare class GeometryBodyPart extends Node3D {
    private _id;
    private _radius;
    private _parts;
    private _dynamicParts;
    constructor(k: any);
    getDynamicParts(k: IAvatarImage): GeometryItem[];
    getPartIds(k: IAvatarImage): string[];
    removeDynamicParts(k: IAvatarImage): boolean;
    addPart(k: any, _arg_2: IAvatarImage): boolean;
    hasPart(k: string, _arg_2: IAvatarImage): boolean;
    getParts(k: Matrix4x4, _arg_2: Vector3D, _arg_3: any[], _arg_4: IAvatarImage): string[];
    getDistance(k: Vector3D): number;
    get id(): string;
    get radius(): number;
}
