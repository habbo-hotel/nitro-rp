import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureCuckooClockLogic extends FurnitureMultiStateLogic {
    private _state;
    getEventTypes(): string[];
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private dispatchSoundEvent;
}
