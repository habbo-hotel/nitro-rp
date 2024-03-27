import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureLogic } from './FurnitureLogic';
export declare class FurnitureHighScoreLogic extends FurnitureLogic {
    private static SHOW_WIDGET_IN_STATE;
    private _state;
    getEventTypes(): string[];
    tearDown(): void;
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
}
