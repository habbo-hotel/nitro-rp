import { IAssetData, IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurniturePresentLogic extends FurnitureLogic {
    private static MESSAGE;
    private static PRODUCT_CODE;
    private static EXTRA_PARAM;
    private static PURCHASER_NAME;
    private static PURCHASER_FIGURE;
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private updateStuffData;
    private writeToModel;
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
    useObject(): void;
}
