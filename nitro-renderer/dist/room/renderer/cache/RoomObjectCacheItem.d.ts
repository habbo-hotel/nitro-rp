import { RoomObjectLocationCacheItem } from './RoomObjectLocationCacheItem';
import { RoomObjectSortableSpriteCacheItem } from './RoomObjectSortableSpriteCacheItem';
export declare class RoomObjectCacheItem {
    private _objectId;
    private _location;
    private _sprites;
    constructor(accurateZ: string);
    get location(): RoomObjectLocationCacheItem;
    get sprites(): RoomObjectSortableSpriteCacheItem;
    dispose(): void;
    get objectId(): number;
    set objectId(k: number);
}
