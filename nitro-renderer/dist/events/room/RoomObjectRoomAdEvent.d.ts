import { IRoomObject } from '../../api';
import { RoomObjectEvent } from './RoomObjectEvent';
export declare class RoomObjectRoomAdEvent extends RoomObjectEvent {
    static ROOM_AD_LOAD_IMAGE: string;
    static ROOM_AD_FURNI_CLICK: string;
    static ROOM_AD_FURNI_DOUBLE_CLICK: string;
    static ROOM_AD_TOOLTIP_SHOW: string;
    static ROOM_AD_TOOLTIP_HIDE: string;
    private _imageUrl;
    private _clickUrl;
    constructor(type: string, object: IRoomObject, imageUrl?: string, clickUrl?: string);
    get imageUrl(): string;
    get clickUrl(): string;
}
