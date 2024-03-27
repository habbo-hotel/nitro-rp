import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurnitureVoteCounterLogic extends FurnitureMultiStateLogic {
    private static UPDATE_INTERVAL;
    private static MAX_UPDATE_TIME;
    private _total;
    private _lastUpdate;
    private _interval;
    constructor();
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private updateTotal;
    update(time: number): void;
    private get currentTotal();
}
