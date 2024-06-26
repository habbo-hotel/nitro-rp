import { IVector3D } from '../../../api';
export declare class RoomCamera {
    private static MOVE_SPEED_DENOMINATOR;
    private _targetId;
    private _targetCategory;
    private _targetLoc;
    private _moveDistance;
    private _previousMoveSpeed;
    private _maintainPreviousMoveSpeed;
    private _currentLoc;
    private _targetObjectLoc;
    private _limitedLocX;
    private _limitedLocY;
    private _centeredLocX;
    private _centeredLocY;
    private _screenWd;
    private _screenHt;
    private _scale;
    private _roomWd;
    private _roomHt;
    private _geometryUpdateId;
    private _scaleChanged;
    private _followDuration;
    constructor();
    get location(): IVector3D;
    get targetId(): number;
    set targetId(k: number);
    get targetCategory(): number;
    set targetCategory(k: number);
    get targetObjectLoc(): IVector3D;
    set targetObjectLoc(k: IVector3D);
    get limitedLocationX(): boolean;
    set limitedLocationX(k: boolean);
    get limitedLocationY(): boolean;
    set limitedLocationY(k: boolean);
    get centeredLocX(): boolean;
    set centeredLocX(k: boolean);
    get centeredLocY(): boolean;
    set centeredLocY(k: boolean);
    get screenWd(): number;
    set screenWd(k: number);
    get screenHt(): number;
    set screenHt(k: number);
    get scale(): number;
    set scale(k: number);
    get roomWd(): number;
    set roomWd(k: number);
    get roomHt(): number;
    set roomHt(k: number);
    get geometryUpdateId(): number;
    set geometryUpdateId(k: number);
    get isMoving(): boolean;
    set target(k: IVector3D);
    dispose(): void;
    initializeLocation(k: IVector3D): void;
    resetLocation(k: IVector3D): void;
    update(k: number, _arg_2: number): void;
    reset(): void;
    activateFollowing(k: number): void;
}
