import { IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureWelcomeGiftLogic extends FurnitureMultiStateLogic {
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
}
