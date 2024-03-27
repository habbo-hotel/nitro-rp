import { Resource, Texture } from '@pixi/core';
export declare class BadgeInfo {
    private _image;
    private _placeHolder;
    constructor(image: Texture<Resource>, placeHolder: boolean);
    get image(): Texture<Resource>;
    get placeHolder(): boolean;
}
