import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureScoreLogic extends FurnitureLogic {
    private static UPDATE_INTERVAL;
    private static MAX_UPDATE_TIME;
    private _score;
    private _scoreIncreaser;
    private _scoreTimer;
    constructor();
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    private updateScore;
    update(time: number): void;
}
