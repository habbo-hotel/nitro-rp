import { BaseTexture } from '@pixi/core';
export declare class NitroBundle {
    private static TEXT_DECODER;
    private _jsonFile;
    private _image;
    private _imageData;
    private _baseTexture;
    constructor(arrayBuffer: ArrayBuffer);
    parse(arrayBuffer: ArrayBuffer): void;
    get jsonFile(): Object;
    get baseTexture(): BaseTexture;
}
