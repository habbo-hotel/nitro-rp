import { RoomEngineObjectEvent } from './RoomEngineObjectEvent';
export declare class RoomEngineUseProductEvent extends RoomEngineObjectEvent {
    static USE_PRODUCT_FROM_ROOM: string;
    static USE_PRODUCT_FROM_INVENTORY: string;
    private _inventoryStripId;
    private _furnitureTypeId;
    constructor(type: string, roomId: number, objectId: number, category: number, inventoryStripId?: number, furnitureTypeId?: number);
    get inventoryStripId(): number;
    get furnitureTypeId(): number;
}
