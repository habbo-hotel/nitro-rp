import { IAssetData, IRoomGeometry } from '../../../../../api';
import { RoomSpriteMouseEvent } from '../../../../../events';
import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureRoomBrandingLogic extends FurnitureLogic {
    static STATE: string;
    static IMAGEURL_KEY: string;
    static CLICKURL_KEY: string;
    static OFFSETX_KEY: string;
    static OFFSETY_KEY: string;
    static OFFSETZ_KEY: string;
    protected _disableFurnitureSelection: boolean;
    protected _hasClickUrl: boolean;
    constructor();
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private processAdDataUpdateMessage;
    private processAdUpdate;
    mouseEvent(event: RoomSpriteMouseEvent, geometry: IRoomGeometry): void;
    private downloadBackground;
}
