import { IVector3D } from '../../../api';
export declare class RoomPlaneBitmapMaskData {
    static WINDOW: string;
    static HOLE: string;
    private _loc;
    private _type;
    private _category;
    constructor(type: string, loc: IVector3D, category: string);
    get loc(): IVector3D;
    set loc(k: IVector3D);
    get type(): string;
    set type(type: string);
    get category(): string;
    set category(category: string);
    dispose(): void;
}
