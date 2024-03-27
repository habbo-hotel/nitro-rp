import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureRoomDimmerLogic extends FurnitureLogic {
    private _roomColorUpdated;
    constructor();
    getEventTypes(): string[];
    protected onDispose(): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private getStateFromDimmerData;
    private processDimmerData;
    useObject(): void;
    update(time: number): void;
}
