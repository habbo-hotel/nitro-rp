import { RenderTexture } from '@pixi/core';
export declare class PlaneBitmapData {
    private _texture;
    private _timeStamp;
    constructor(texture: RenderTexture, timestamp: number);
    dispose(): void;
    get texture(): RenderTexture;
    get timeStamp(): number;
}
