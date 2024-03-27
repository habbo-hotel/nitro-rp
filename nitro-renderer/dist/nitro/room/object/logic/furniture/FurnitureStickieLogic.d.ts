import { IAssetData } from '../../../../../api';
import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureStickieLogic extends FurnitureLogic {
    private static STICKIE_COLORS;
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    protected updateColor(): void;
    useObject(): void;
}
