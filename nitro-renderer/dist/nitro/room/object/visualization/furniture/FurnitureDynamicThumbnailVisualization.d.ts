import { IsometricImageFurniVisualization } from './IsometricImageFurniVisualization';
export declare class FurnitureDynamicThumbnailVisualization extends IsometricImageFurniVisualization {
    private _cachedUrl;
    constructor();
    protected updateModel(scale: number): boolean;
    protected getThumbnailURL(): string;
}
