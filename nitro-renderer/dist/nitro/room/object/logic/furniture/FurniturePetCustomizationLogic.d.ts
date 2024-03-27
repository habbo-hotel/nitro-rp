import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurniturePetCustomizationLogic extends FurnitureLogic {
    getEventTypes(): string[];
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    useObject(): void;
}
