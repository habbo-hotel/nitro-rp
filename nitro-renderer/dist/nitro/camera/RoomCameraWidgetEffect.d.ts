import { Resource, Texture } from '@pixi/core';
import { ColorMatrix } from '@pixi/filter-color-matrix';
import { IRoomCameraWidgetEffect } from '../../api';
export declare class RoomCameraWidgetEffect implements IRoomCameraWidgetEffect {
    private _name;
    private _minLevel;
    private _texture;
    private _colorMatrix;
    private _blendMode;
    constructor(name: string, minLevel?: number, texture?: Texture<Resource>, colorMatrix?: ColorMatrix, blendMode?: number);
    get name(): string;
    get texture(): Texture<Resource>;
    set texture(texture: Texture<Resource>);
    get colorMatrix(): ColorMatrix;
    set colorMatrix(colorMatrix: ColorMatrix);
    get blendMode(): number;
    set blendMode(blendMode: number);
    get minLevel(): number;
}
