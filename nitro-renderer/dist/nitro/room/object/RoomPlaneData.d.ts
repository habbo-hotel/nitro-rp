import { IVector3D } from '../../../api';
export declare class RoomPlaneData {
    static PLANE_UNDEFINED: number;
    static PLANE_FLOOR: number;
    static PLANE_WALL: number;
    static PLANE_LANDSCAPE: number;
    static PLANE_BILLBOARD: number;
    private _type;
    private _loc;
    private _leftSide;
    private _rightSide;
    private _normal;
    private _normalDirection;
    private _secondaryNormals;
    private _masks;
    constructor(k: number, _arg_2: IVector3D, _arg_3: IVector3D, _arg_4: IVector3D, _arg_5: IVector3D[]);
    get type(): number;
    get loc(): IVector3D;
    get leftSide(): IVector3D;
    get rightSide(): IVector3D;
    get normal(): IVector3D;
    get normalDirection(): IVector3D;
    get secondaryNormalCount(): number;
    get maskCount(): number;
    getSecondaryNormal(k: number): IVector3D;
    addMask(k: number, _arg_2: number, _arg_3: number, _arg_4: number): void;
    private getMask;
    getMaskLeftSideLoc(k: number): number;
    getMaskRightSideLoc(k: number): number;
    getMaskLeftSideLength(k: number): number;
    getMaskRightSideLength(k: number): number;
}
