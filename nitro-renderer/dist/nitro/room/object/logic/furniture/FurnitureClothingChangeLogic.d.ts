import { IAssetData } from '../../../../../api';
import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureClothingChangeLogic extends FurnitureLogic {
    getEventTypes(): string[];
    initialize(asset: IAssetData): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private updateClothingData;
    useObject(): void;
}
