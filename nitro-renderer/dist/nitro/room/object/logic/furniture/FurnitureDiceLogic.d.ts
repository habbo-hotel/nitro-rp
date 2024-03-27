import { IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureDiceLogic extends FurnitureLogic {
    private _noTags;
    private _noTagsLastStateActivate;
    constructor();
    getEventTypes(): string[];
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
}
