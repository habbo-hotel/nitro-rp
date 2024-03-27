import { IAvatarImage } from '../../../api';
import { AvatarCanvas } from '../structure';
import { GeometryBodyPart } from './GeometryBodyPart';
export declare class AvatarModelGeometry {
    private _camera;
    private _avatarSet;
    private _geometryTypes;
    private _itemIdToBodyPartMap;
    private _transformation;
    private _canvases;
    constructor(k: any);
    removeDynamicItems(k: IAvatarImage): void;
    getBodyPartIdsInAvatarSet(k: string): string[];
    isMainAvatarSet(k: string): boolean;
    getCanvas(k: string, _arg_2: string): AvatarCanvas;
    private typeExists;
    private hasBodyPart;
    private getBodyPartIDs;
    private getBodyPartsOfType;
    getBodyPart(k: string, _arg_2: string): GeometryBodyPart;
    getBodyPartOfItem(k: string, _arg_2: string, _arg_3: IAvatarImage): GeometryBodyPart;
    private getBodyPartsInAvatarSet;
    getBodyPartsAtAngle(k: string, _arg_2: number, _arg_3: string): string[];
    getParts(k: string, _arg_2: string, _arg_3: number, _arg_4: any[], _arg_5: IAvatarImage): string[];
}
