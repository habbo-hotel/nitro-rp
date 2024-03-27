import { IRoomCameraWidgetEffect } from '../../api';
export declare class RoomCameraWidgetSelectedEffect {
    private _effect;
    private _alpha;
    constructor(effect: IRoomCameraWidgetEffect, alpha: number);
    get effect(): IRoomCameraWidgetEffect;
    get alpha(): number;
}
