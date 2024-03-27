import { IAvatarImageListener, IObjectVisualizationData } from '../../../../../api';
import { FurnitureMannequinVisualizationData } from './FurnitureMannequinVisualizationData';
import { FurnitureVisualization } from './FurnitureVisualization';
export declare class FurnitureMannequinVisualization extends FurnitureVisualization implements IAvatarImageListener {
    private static AVATAR_IMAGE_SPRITE_TAG;
    private _mannequinScale;
    private _figure;
    private _gender;
    private _dynamicAssetName;
    private _needsUpdate;
    private _placeHolderFigure;
    private _disposed;
    constructor();
    initialize(data: IObjectVisualizationData): boolean;
    dispose(): void;
    protected updateObject(scale: number, direction: number): boolean;
    protected updateModel(scale: number): boolean;
    private updateAvatar;
    private avatarExists;
    private getAvatarAssetName;
    resetFigure(figure: string): void;
    protected getSpriteAssetName(scale: number, layerId: number): string;
    protected getLayerXOffset(scale: number, direction: number, layerId: number): number;
    protected getLayerYOffset(scale: number, direction: number, layerId: number): number;
    get disposed(): boolean;
    protected get data(): FurnitureMannequinVisualizationData;
}
