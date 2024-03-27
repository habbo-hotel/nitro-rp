import { IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureMultiStateLogic extends FurnitureLogic {
    getEventTypes(): string[];
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
}
