import { Texture } from '@pixi/core';
import { IEventDispatcher, IRoomCameraWidgetEffect, IRoomCameraWidgetManager, IRoomCameraWidgetSelectedEffect } from '../../api';
export declare class RoomCameraWidgetManager implements IRoomCameraWidgetManager {
    private _effects;
    private _events;
    private _isLoaded;
    constructor();
    init(): void;
    applyEffects(texture: Texture, selectedEffects: IRoomCameraWidgetSelectedEffect[], isZoomed: boolean): HTMLImageElement;
    get effects(): Map<string, IRoomCameraWidgetEffect>;
    get events(): IEventDispatcher;
    get isLoaded(): boolean;
}
