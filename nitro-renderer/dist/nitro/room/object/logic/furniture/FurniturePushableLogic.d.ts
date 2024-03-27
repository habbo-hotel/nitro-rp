import { RoomObjectUpdateMessage } from '../../../../../room';
import { FurnitureMultiStateLogic } from './FurnitureMultiStateLogic';
export declare class FurniturePushableLogic extends FurnitureMultiStateLogic {
    private static ANIMATION_NOT_MOVING;
    private static ANIMATION_MOVING;
    private static MAX_ANIMATION_COUNT;
    private _oldLocation;
    constructor();
    processUpdateMessage(message: RoomObjectUpdateMessage): void;
    protected getUpdateIntervalValue(value: number): number;
    protected getAnimationValue(value: number): number;
    private handleDataUpdate;
    update(time: number): void;
}
