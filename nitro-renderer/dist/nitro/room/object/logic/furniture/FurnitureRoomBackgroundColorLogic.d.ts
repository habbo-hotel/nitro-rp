import { IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureRoomBackgroundColorLogic extends FurnitureMultiStateLogic {
    private _roomColorUpdated;
    constructor();
    getEventTypes(): string[];
    protected onDispose(): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private processColorUpdate;
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
}
