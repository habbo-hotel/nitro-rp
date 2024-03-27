import { Resource, Texture } from '@pixi/core';
import { Spritesheet } from '@pixi/spritesheet';
import { IAssetData } from './IAssetData';
import { IAssetManager } from './IAssetManager';
import { IGraphicAsset } from './IGraphicAsset';
import { IGraphicAssetCollection } from './IGraphicAssetCollection';
export declare class AssetManager implements IAssetManager {
    static _INSTANCE: IAssetManager;
    private _textures;
    private _collections;
    getTexture(name: string): Texture<Resource>;
    setTexture(name: string, texture: Texture<Resource>): void;
    getAsset(name: string): IGraphicAsset;
    getCollection(name: string): IGraphicAssetCollection;
    createCollection(data: IAssetData, spritesheet: Spritesheet): IGraphicAssetCollection;
    downloadAsset(url: string): Promise<boolean>;
    downloadAssets(urls: string[]): Promise<boolean>;
    private processAsset;
    get collections(): Map<string, IGraphicAssetCollection>;
}
