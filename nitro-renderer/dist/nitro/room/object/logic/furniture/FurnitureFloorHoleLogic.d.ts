import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureFloorHoleLogic extends FurnitureMultiStateLogic {
    private static STATE_HOLE;
    private _currentState;
    private _currentLocation;
    constructor();
    getEventTypes(): string[];
    protected onDispose(): void;
    update(time: number): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private handleStateUpdate;
    private handleAutomaticStateUpdate;
}
