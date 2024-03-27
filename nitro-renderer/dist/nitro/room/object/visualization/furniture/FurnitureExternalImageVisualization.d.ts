import { FurnitureDynamicThumbnailVisualization } from './FurnitureDynamicThumbnailVisualization';
export declare class FurnitureExternalImageVisualization extends FurnitureDynamicThumbnailVisualization {
    private _url;
    private _typePrefix;
    constructor();
    protected getThumbnailURL(): string;
    private buildThumbnailUrl;
}
