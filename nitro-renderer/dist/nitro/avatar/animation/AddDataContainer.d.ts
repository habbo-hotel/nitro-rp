import { IAssetAnimationAdd } from '../../../api';
export declare class AddDataContainer {
    private _id;
    private _align;
    private _base;
    private _ink;
    private _blend;
    constructor(k: IAssetAnimationAdd);
    get id(): string;
    get align(): string;
    get base(): string;
    get ink(): number;
    get blend(): number;
    get isBlended(): boolean;
}
