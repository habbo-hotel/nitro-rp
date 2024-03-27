import { IPetColorResult } from '../../api';
export declare class PetColorResult implements IPetColorResult {
    private static COLOR_TAGS;
    private _breed;
    private _tag;
    private _id;
    private _primaryColor;
    private _secondaryColor;
    private _isMaster;
    private _layerTags;
    constructor(primaryColor: number, secondaryColor: number, breed: number, tag: number, id: string, isMaster: boolean, layerTags: string[]);
    get primaryColor(): number;
    get secondaryColor(): number;
    get breed(): number;
    get tag(): string;
    get id(): string;
    get isMaster(): boolean;
    get layerTags(): string[];
}
