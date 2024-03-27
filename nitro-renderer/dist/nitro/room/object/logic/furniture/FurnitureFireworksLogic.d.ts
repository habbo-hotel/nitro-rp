import { IAssetData, IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureFireworksLogic extends FurnitureLogic {
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
    useObject(): void;
}
