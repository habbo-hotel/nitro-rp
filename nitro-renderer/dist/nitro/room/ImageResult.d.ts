import { RenderTexture } from '@pixi/core';
import { IImageResult } from '../../api';
export declare class ImageResult implements IImageResult {
    id: number;
    data: RenderTexture;
    image: HTMLImageElement;
    getImage(): HTMLImageElement;
}
