import { IAssetAlias } from '../../../api';
export declare class AssetAlias {
    private _name;
    private _link;
    private _flipH;
    private _flipV;
    constructor(name: string, alias: IAssetAlias);
    get name(): string;
    get link(): string;
    get flipH(): boolean;
    get flipV(): boolean;
}
