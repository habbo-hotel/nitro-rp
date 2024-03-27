import { RenderTexture } from '@pixi/core';
import { IMessageComposer } from '../../../../../api';
export declare class RenderRoomMessageComposer implements IMessageComposer<ConstructorParameters<typeof RenderRoomMessageComposer>> {
    private _data;
    constructor(k?: any, _arg_2?: string, _arg_3?: string, _arg_4?: number, _arg_5?: number);
    getMessageArray(): any;
    dispose(): void;
    assignBitmap(texture: RenderTexture): void;
    assignBase64(base64: string): void;
}
