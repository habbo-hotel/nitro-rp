import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureBadgeDisplayLogic extends FurnitureLogic {
    getEventTypes(): string[];
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    useObject(): void;
    protected updateBadge(badgeId: string): void;
}
