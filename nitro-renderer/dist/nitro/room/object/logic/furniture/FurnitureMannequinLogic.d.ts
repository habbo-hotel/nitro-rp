import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureMannequinLogic extends FurnitureLogic {
    private static GENDER;
    private static FIGURE;
    private static OUTFIT_NAME;
    getEventTypes(): string[];
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private processObjectData;
    useObject(): void;
}
