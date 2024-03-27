import { IVector3D } from '../../../room';
export declare class ObjectRolling {
    static MOVE: string;
    static SLIDE: string;
    private _id;
    private _location;
    private _targetLocation;
    private _movementType;
    constructor(id: number, location: IVector3D, targetLocation: IVector3D, movementType?: string);
    get id(): number;
    get location(): IVector3D;
    get targetLocation(): IVector3D;
    get movementType(): string;
}
