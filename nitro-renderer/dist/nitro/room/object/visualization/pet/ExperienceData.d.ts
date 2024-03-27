import { RenderTexture, Resource, Texture } from '@pixi/core';
export declare class ExperienceData {
    private _sprite;
    private _texture;
    private _amount;
    private _alpha;
    constructor(texture: Texture<Resource>);
    renderBubble(amount: number): RenderTexture;
    get amount(): number;
    set amount(amount: number);
    get alpha(): number;
    set alpha(alpha: number);
}
