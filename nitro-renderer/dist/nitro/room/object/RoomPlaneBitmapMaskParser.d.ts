import { IVector3D } from '../../../api';
import { RoomMapMaskData } from './RoomMapMaskData';
import { RoomPlaneBitmapMaskData } from './RoomPlaneBitmapMaskData';
export declare class RoomPlaneBitmapMaskParser {
    private _masks;
    constructor();
    get maskCount(): number;
    dispose(): void;
    initialize(k: RoomMapMaskData): boolean;
    reset(): void;
    addMask(k: string, _arg_2: string, _arg_3: IVector3D, _arg_4: string): void;
    removeMask(k: string): boolean;
    getXML(): RoomMapMaskData;
    getMaskLocation(mask: RoomPlaneBitmapMaskData): IVector3D;
    getMaskType(mask: RoomPlaneBitmapMaskData): string;
    getMaskCategory(mask: RoomPlaneBitmapMaskData): string;
    get masks(): Map<string, RoomPlaneBitmapMaskData>;
}
