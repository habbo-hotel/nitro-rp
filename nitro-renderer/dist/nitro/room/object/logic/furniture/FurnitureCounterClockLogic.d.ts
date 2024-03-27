import { IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureCounterClockLogic extends FurnitureLogic {
    getEventTypes(): string[];
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
    useObject(): void;
}
