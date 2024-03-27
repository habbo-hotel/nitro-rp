import { IActionDefinition, IActiveActionData, IAnimationLayerData, IAssetAnimationFramePart } from '../../../api';
export declare class AvatarAnimationLayerData implements IAnimationLayerData {
    static BODYPART: string;
    static FX: string;
    private _id;
    private _action;
    private _animationFrame;
    private _dx;
    private _dy;
    private _dz;
    private _directionOffset;
    private _type;
    private _base;
    private _items;
    constructor(k: IAssetAnimationFramePart, _arg_2: string, _arg_3: IActionDefinition);
    get items(): Map<string, string>;
    private baseAsInt;
    get id(): string;
    get animationFrame(): number;
    get dx(): number;
    get dy(): number;
    get dz(): number;
    get dd(): number;
    get type(): string;
    get base(): string;
    get action(): IActiveActionData;
}
