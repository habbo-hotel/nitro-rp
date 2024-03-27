import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureIceStormLogic extends FurnitureMultiStateLogic {
    private _nextState;
    private _nextStateExtra;
    private _nextStateTimestamp;
    constructor();
    update(totalTimeRunning: number): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private processUpdate;
}
