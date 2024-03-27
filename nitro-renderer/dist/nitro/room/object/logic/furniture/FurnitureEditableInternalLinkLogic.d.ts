import { IAssetData, IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureEditableInternalLinkLogic extends FurnitureLogic {
    private _showStateOnceRendered;
    private _updateCount;
    constructor();
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    update(time: number): void;
    private setAutomaticStateIndex;
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
    useObject(): void;
}
