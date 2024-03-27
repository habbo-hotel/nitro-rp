import { IAssetData } from '../../../../../api';
import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureFriendFurniLogic extends FurnitureMultiStateLogic {
    private static readonly STATE_UNINITIALIZED;
    private static readonly STATE_UNLOCKED;
    private static readonly STATE_LOCKED;
    private _state;
    initialize(asset: IAssetData): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    getEventTypes(): string[];
    useObject(): void;
    get engravingDialogType(): number;
    get contextMenu(): string;
}
