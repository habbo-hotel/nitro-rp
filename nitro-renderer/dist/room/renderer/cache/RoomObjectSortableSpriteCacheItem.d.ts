import { SortableSprite } from '../utils';
export declare class RoomObjectSortableSpriteCacheItem {
    private _sprites;
    private _updateId1;
    private _updateId2;
    private _isEmpty;
    constructor();
    get spriteCount(): number;
    get isEmpty(): boolean;
    dispose(): void;
    addSprite(sprite: SortableSprite): void;
    getSprite(k: number): SortableSprite;
    get sprites(): SortableSprite[];
    needsUpdate(k: number, _arg_2: number): boolean;
    setSpriteCount(k: number): void;
}
