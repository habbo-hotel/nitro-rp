import { Resource, Texture } from '@pixi/core';
import { FurnitureBrandedImageVisualization } from './FurnitureBrandedImageVisualization';
export declare class FurnitureRoomBackgroundVisualization extends FurnitureBrandedImageVisualization {
    private _imageOffset;
    protected imageReady(texture: Texture<Resource>, imageUrl: string): void;
    private setImageOffset;
    protected getLayerXOffset(scale: number, direction: number, layerId: number): number;
    protected getLayerYOffset(scale: number, direction: number, layerId: number): number;
    protected getLayerZOffset(scale: number, direction: number, layerId: number): number;
    protected getLayerIgnoreMouse(scale: number, direction: number, layerId: number): boolean;
}
