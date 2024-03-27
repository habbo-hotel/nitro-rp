import { IPetCustomPart } from '../../../api';
export declare class PetCustomPart implements IPetCustomPart {
    private _layerId;
    private _partId;
    private _paletteId;
    constructor(layerId: number, partId: number, paletteId: number);
    get layerId(): number;
    set layerId(layerId: number);
    get partId(): number;
    set partId(partId: number);
    get paletteId(): number;
    set paletteId(paletteId: number);
}
