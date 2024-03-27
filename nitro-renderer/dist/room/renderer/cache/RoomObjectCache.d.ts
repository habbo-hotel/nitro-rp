import { RoomObjectSpriteData } from '../../../api';
import { SortableSprite } from '../utils';
import { RoomObjectCacheItem } from './RoomObjectCacheItem';
export declare class RoomObjectCache {
    private static MAX_SIZE_FOR_AVG_COLOR;
    private _data;
    private _roomObjectVariableAccurateZ;
    constructor(accurateZ: string);
    dispose(): void;
    getObjectCache(k: string): RoomObjectCacheItem;
    removeObjectCache(k: string): void;
    getSortableSpriteList(): RoomObjectSpriteData[];
    private isSkewedSprite;
    getPlaneSortableSprites(): SortableSprite[];
}
