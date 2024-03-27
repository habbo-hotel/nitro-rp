import { RoomEngineObjectEvent } from './RoomEngineObjectEvent';
export declare class RoomEngineObjectPlacedOnUserEvent extends RoomEngineObjectEvent {
    private _droppedObjectId;
    private _droppedObjectCategory;
    constructor(k: string, roomId: number, objectId: number, category: number, droppedObjectId: number, droppedObjectCategory: number);
    get droppedObjectId(): number;
    get droppedObjectCategory(): number;
}
